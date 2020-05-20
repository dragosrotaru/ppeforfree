import { Page } from "puppeteer";
import uuid from "uuid/v4";
import moment from "moment";
import { DOMParser } from "xmldom";
import xpath from "xpath";
import { sleep, randomSleep } from "../../sleep";
import {
  UUID,
  Url,
  FacebookID,
  FacebookGroupScrape,
  FacebookGroupAboutScrape,
  FacebookGroupAdminsScrape,
  FacebookGroupPagesScrape,
  FacebookGroupMembersScrape,
  FacebookGroupPostScrape,
} from "../../models";

const BASE_XPATH = "/html/body/div[1]/div/div/div[2]/div/div/div[1]";
const ADMIN_XPATH_SEGMENT = "/div/div[2]/div";

const MEMBER_LIST_XPATH =
  "/div/div[4]/div/div/div/div/div/div/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/div/div/div[1]/span/span/div/a/@href";
const MEMBER_COUNT_XPATH =
  "/div/div[4]/div/div/div/div/div/div/div/div[2]/div[1]/div/div[1]/div/div/div/div/div[1]/h1/div/span/strong/text()";

const xPathHrefIDExtractor = (input: string) =>
  input
    .replace('href="https://www.facebook.com/', "")
    .replace('"', "")
    .replace("/", "")
    .trim();

export class FacebookScraperSession {
  private _BASE_XPATH: string = BASE_XPATH;
  private id: UUID = uuid();
  private _isLoggedIn: boolean = false;
  private _currentUrl?: Url;
  private _currentUrlIsInvalid?: boolean;
  private lock: boolean = false;
  private page: Page;
  private domParser = new DOMParser({
    locator: {},
    errorHandler: {
      warning: () => {},
      error: () => {},
      fatalError: console.error,
    },
  });

  constructor(page: Page) {
    this.page = page;
  }

  private sleep(ms?: number) {
    return ms ? sleep(ms) : randomSleep(400, 2000);
  }

  private waitForNetworkIdle() {
    const { page } = this;
    page.on("request", onRequestStarted);
    page.on("requestfinished", onRequestFinished);
    page.on("requestfailed", onRequestFinished);

    let inflight = 0;
    let fulfill: () => void;
    let promise = new Promise(x => (fulfill = x));
    return promise;

    function done() {
      page.removeListener("request", onRequestStarted);
      page.removeListener("requestfinished", onRequestFinished);
      page.removeListener("requestfailed", onRequestFinished);
      fulfill();
    }

    function onRequestStarted() {
      ++inflight;
    }

    function onRequestFinished() {
      --inflight;
      if (inflight === 0) done();
    }
  }

  private async autoScroll() {
    const initialHeight = (await this.page.evaluate(
      "document.body.scrollHeight"
    )) as number;
    let heightOne = initialHeight;
    let heightTwo = initialHeight + 1;
    while (heightTwo > heightOne) {
      await this.page.evaluate(
        "window.scrollTo(0, document.body.scrollHeight)"
      );
      await Promise.all([this.sleep(1000), this.waitForNetworkIdle()]);
      heightOne = heightTwo;
      heightTwo = (await this.page.evaluate(
        "document.body.scrollHeight"
      )) as number;
    }
  }

  private async goto(url: Url) {
    this._currentUrl = url;
    await this.page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 3600000,
    });
    this._currentUrlIsInvalid = await this.pageIsInvalid();
    await this.sleep();
  }

  private async pageIsInvalid(): Promise<boolean> {
    const content = await this.page.content();
    return (
      content.indexOf(
        `When this happens, it's usually because the owner only shared it with
        a small group of people, changed who can see it or it's been deleted.`
      ) > -1 ||
      content.indexOf(
        `The link may be broken, or the page may have been removed. Check to
        see if the link you're trying to open is correct.`
      ) > -1
    );
  }

  public async isLoggedIn() {
    if (this.lock) throw new Error("facebook scraper session currently in use");
    this.lock = true;
    if (this._isLoggedIn) return true;
    const FB_USERID = process.env.FB_USERID;
    await this.goto("https://facebook.com");
    const elem = await this.page.$(
      `a[href="https://www.facebook.com/${FB_USERID}"]`
    );
    const isLoggedIn = elem ? true : false;
    this._isLoggedIn = isLoggedIn;
    this.lock = false;
    return isLoggedIn;
  }

  /**
   * if FB_2FA ENV Variable is set to true, session will wait 30 seconds for user to input 2FA code.
   */
  public async login(): Promise<boolean> {
    if (await this.isLoggedIn()) return true;

    const FB_USERNAME = process.env.FB_USERNAME;
    const FB_PASSWORD = process.env.FB_PASSWORD;
    const FB_USERID = process.env.FB_USERID;
    const FB_2FA = process.env.FB_2FA;

    if (!FB_USERNAME || !FB_PASSWORD || !FB_USERID)
      throw new Error("Facebook credentials Required");

    if (this.lock) throw new Error("facebook scraper session currently in use");
    this.lock = true;
    await this.goto("https://facebook.com");
    const { page } = this;
    await page.waitForSelector("#email");
    await this.sleep();
    await page.type("#email", FB_USERNAME);
    await this.sleep();
    await page.type("#pass", FB_PASSWORD);
    await this.sleep();
    await page.click("#loginbutton");
    await page.waitForNavigation();

    if (FB_2FA) await this.sleep(20000);
    this.lock = false;
    return await this.isLoggedIn();
  }

  public async groupExists(id: FacebookID): Promise<boolean> {
    await this.goto(`https://facebook.com/groups/${id}`);
    return !this._currentUrlIsInvalid;
  }

  public async scrapeGroupAbout(
    id: FacebookID
  ): Promise<Partial<FacebookGroupAboutScrape>> {
    const result: Partial<FacebookGroupAboutScrape> = {};

    if (this.lock) throw new Error("facebook scraper session currently in use");
    this.lock = true;
    await this.goto(`https://facebook.com/groups/${id}/about`);
    let dom = this.domParser.parseFromString(await this.page.content());

    try {
      const isPublicXPath =
        this._BASE_XPATH +
        "/div/div[1]/div[2]/div/div/div/div/div[1]/div/div/div[2]/span/span[1]/text()";
      result.isPublic =
        xpath
          .select(isPublicXPath, dom)[0]
          .toString()
          .indexOf("Public") > -1;
    } catch (error) {
      console.error(`${id}: isPublic: ${error.message}`);
      throw error; // scrape should fail if isPublic is unknown
    }
    const divIndex = result.isPublic ? "4" : "2";

    const seeMoreDescButton = await this.page.$x(
      this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[1]/div/div/div/div/div/div[2]/div[1]/div/div/span/div/div/div`
    );
    if (seeMoreDescButton[0]) {
      await seeMoreDescButton[0].click();
    }
    const seeMoreLocationButton = await this.page.$x(
      this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[1]/div/div/div/div/div/div[2]/div[4]/div/div/div[2]/div/div/span/span/div`
    );
    if (seeMoreLocationButton[0]) {
      await seeMoreLocationButton[0].click();
    }
    dom = this.domParser.parseFromString(await this.page.content());
    this.lock = false;

    try {
      const nameXPath =
        this._BASE_XPATH +
        "/div/div[1]/div[2]/div/div/div/div/div[1]/div/div/div[1]/descendant::*/text()";
      result.name = xpath.select(nameXPath, dom)[0].toString();
    } catch (error) {
      console.error(`${id}: name: ${error.message}`);
    }

    try {
      const descriptionXPath =
        this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[1]/div/div/div/div/div/div[2]/div[1]/div/div/span/descendant::*/text()`;
      const description = xpath
        .select(descriptionXPath, dom)
        .map(e => e.toString().trim())
        .filter(
          e => e !== "" && e !== "See Less" && e !== "Public" && e !== "Private"
        )
        .join("\n");
      result.description = description;
    } catch (error) {
      console.error(`${id}: description: ${error.message}`);
    }

    try {
      const locationsXPath =
        this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[1]/div/div/div/div/div/div[2]/div[4]/div/div/div[2]/div/div/span/span/strong/text()`;
      const locations = xpath
        .select(locationsXPath, dom)
        .map(e => e.toString());
      if (locations.length > 0) result.locations = locations;
    } catch (error) {
      console.error(`${id}: locations: ${error.message}`);
    }

    try {
      const historyXPath =
        this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[1]/div/div/div/div/div/div[2]/div[last()]/div/div/div[2]/div/div[2]/span/span/text()`;
      result.foundedOn = moment(
        xpath
          .select(historyXPath, dom)[0]
          .toString()
          .replace("Group created on ", "")
          .replace(". Name last changed on ", "|")
          .split("|")[0],
        "MMMM DD, YYYY"
      ).toISOString(); // second array element includes last name change dates
    } catch (error) {
      console.error(`${id}: foundedOn: ${error.message}`);
    }

    try {
      const memberCountXPath =
        this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[3]/div/div/div/div/div/div[1]/div/div/div/div/div/h1/div/span/strong/text()`;
      result.memberCount = parseInt(
        xpath
          .select(memberCountXPath, dom)[0]
          .toString()
          .replace(",", "")
          .replace(".", "")
      );
    } catch (error) {
      console.error(`${id}: memberCount: ${error.message}`);
    }

    try {
      const memberCountIncreaseWeeklyXPath =
        this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[3]/div/div/div/div/div/div[2]/div/div[2]/div/div/div[2]/div/div[2]/span/text()`;
      result.memberCountIncreaseWeekly = parseInt(
        xpath
          .select(memberCountIncreaseWeeklyXPath, dom)[0]
          .toString()
          .replace("+", "")
          .replace(",", "")
          .replace(".", "")
      );
    } catch (error) {
      console.error(`${id}: memberCountIncreaseWeekly: ${error.message}`);
    }

    try {
      const postCountIncreaseDailyXPath =
        this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[3]/div/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[1]/span/text()`;
      result.postCountIncreaseDaily = parseInt(
        xpath
          .select(postCountIncreaseDailyXPath, dom)[0]
          .toString()
          .replace(",", "")
          .replace(".", "")
      );
    } catch (error) {
      console.error(`${id}: postCountIncreaseDaily: ${error.message}`);
    }

    try {
      const postCountIncreaseMonthlyXPath =
        this._BASE_XPATH +
        `/div/div[${divIndex}]/div/div[3]/div/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[2]/span/text()`;
      result.postCountIncreaseMonthly = parseInt(
        xpath
          .select(postCountIncreaseMonthlyXPath, dom)[0]
          .toString()
          .replace(",", "")
          .replace(".", "")
      );
    } catch (error) {
      console.error(`${id}: postCountIncreaseMonthly: ${error.message}`);
    }

    return result;
  }

  public async scrapeGroupAdmins(
    id: FacebookID
  ): Promise<Partial<FacebookGroupAdminsScrape>> {
    const result: Partial<FacebookGroupAdminsScrape> = {};

    if (this.lock) throw new Error("facebook scraper session currently in use");
    this.lock = true;
    await this.goto(`https://facebook.com/groups/${id}/members/admins`);
    await this.autoScroll();
    const dom = this.domParser.parseFromString(await this.page.content());
    this.lock = false;

    try {
      result.adminModeratorCount = parseInt(
        xpath
          .select(this._BASE_XPATH + MEMBER_COUNT_XPATH, dom)[0]
          .toString()
          .replace(",", "")
          .replace(".", "")
      );
    } catch (error) {
      console.error(`${id}: adminModeratorCount: ${error.message}`);
    }

    try {
      result.adminModeratorList = xpath
        .select(this._BASE_XPATH + MEMBER_LIST_XPATH, dom)
        .map(e => xPathHrefIDExtractor(e.toString()));
    } catch (error) {
      console.error(`${id}: adminModeratorList: ${error.message}`);
    }

    return result;
  }

  public async scrapeGroupPages(
    id: FacebookID
  ): Promise<Partial<FacebookGroupPagesScrape>> {
    const result: Partial<FacebookGroupPagesScrape> = {};

    if (this.lock) throw new Error("facebook scraper session currently in use");
    this.lock = true;
    await this.goto(`https://facebook.com/groups/${id}/members/pages`);
    await this.autoScroll();
    const pageDoc = this.domParser.parseFromString(await this.page.content());
    this.lock = false;

    try {
      result.pageCount = parseInt(
        xpath
          .select(this._BASE_XPATH + MEMBER_COUNT_XPATH, pageDoc)[0]
          .toString()
          .replace(",", "")
          .replace(".", "")
      );
    } catch (error) {
      console.error(`${id}: pageCount: ${error.message}`);
    }

    try {
      result.pageList = xpath
        .select(this._BASE_XPATH + MEMBER_LIST_XPATH, pageDoc)
        .map(e => xPathHrefIDExtractor(e.toString()));
    } catch (error) {
      console.error(`${id}: pageList: ${error.message}`);
    }
    return result;
  }

  public async scrapeGroupMembers(
    id: FacebookID
  ): Promise<Partial<FacebookGroupMembersScrape>> {
    const result: Partial<FacebookGroupMembersScrape> = {};

    if (this.lock) throw new Error("facebook scraper session currently in use");
    this.lock = true;
    await this.goto(`https://facebook.com/groups/${id}/members`);
    await this.autoScroll();
    const dom = this.domParser.parseFromString(await this.page.content());
    this.lock = false;

    try {
      result.memberList = xpath
        .select(this._BASE_XPATH + MEMBER_LIST_XPATH, dom)
        .map(e => xPathHrefIDExtractor(e.toString()));
    } catch (error) {
      console.error(`${id}: memberList: ${error.message}`);
    }
    return result;
  }

  public async scrapeGroupPosts(
    id: FacebookID
  ): Promise<Partial<FacebookGroupPostScrape>[]> {
    throw new Error("not implemented yet");
  }

  public async scrapeGroup(
    id: FacebookID
  ): Promise<Partial<FacebookGroupScrape>> {
    if (id.length === 0) throw new Error("invalid group ID");
    const exists = await this.groupExists(id);
    if (!exists) throw new Error("invalid group ID");

    if (this.lock) throw new Error("facebook scraper session currently in use");
    this.lock = true;
    await this.goto(`https://facebook.com/groups/${id}`);
    const dom = this.domParser.parseFromString(await this.page.content());
    this.lock = false;

    const userIsAdminXPath =
      BASE_XPATH +
      "/div/div[1]/div/div[2]/div[1]/div[4]/div/div[1]/span/text()";
    const adminToolsTextNode = xpath.select(userIsAdminXPath, dom)[0];
    const userIsAdmin =
      adminToolsTextNode !== undefined &&
      adminToolsTextNode.toString() === "Admin Tools";
    if (userIsAdmin) {
      this._BASE_XPATH = BASE_XPATH + ADMIN_XPATH_SEGMENT;
    }

    return {
      id,
      scrapeID: this.id,
      scrapedAt: moment().toISOString(),
      ...(await this.scrapeGroupAbout(id)),
      //...(await this.scrapeGroupAdmins(id)),
      //...(await this.scrapeGroupPages(id)),
      //...(await this.scrapeGroupMembers(id)),
    };
  }

  public get currentUrl() {
    return this._currentUrl;
  }

  public get currentUrlIsInvalid() {
    return this._currentUrlIsInvalid;
  }
}
