import puppeteer from "puppeteer";
import { FacebookScraperSession } from "./facebook";

export class Scraper {
  private browser?: puppeteer.Browser;
  private facebookScraperSession?: FacebookScraperSession;

  public async init() {
    const browser = await puppeteer.launch({
      userDataDir: "./chrome_user_data",
      headless: false, // must be false
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    process.once("SIGINT", () => browser.close());
    this.browser = browser;
  }

  public async facebook(): Promise<FacebookScraperSession> {
    if (!this.browser) throw new Error("Scraper must be initialized first");
    if (this.facebookScraperSession) return this.facebookScraperSession;
    const page = await this.browser.newPage();
    return new FacebookScraperSession(page);
  }

  public async close() {
    if (!this.browser) throw new Error("Scraper must be initialized first");
    this.browser.close();
  }
}
