import { parseIndexFile } from "./csv";
import { Scraper } from "./scraper";
import { MongoClient } from "mongodb";

(async () => {
  const mongoClient = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  await mongoClient.connect();
  const db = mongoClient.db("ppeforfree");
  const collection = db.collection("facebook-groups-scrapes");

  const scraper = new Scraper();
  await scraper.init();
  console.log("scraper inititialized");
  const facebookScraperSession = await scraper.facebook();
  console.log("facebook scraper session inititialized");
  await facebookScraperSession.login();
  console.log("facebook scraper session logged in successfully");
  const facebookGroupIDArray = parseIndexFile();
  for (let index = 0; index < facebookGroupIDArray.length; index++) {
    const groupID = facebookGroupIDArray[index];
    try {
      console.log(
        `progress: ${(index / facebookGroupIDArray.length).toFixed(
          2
        )}% ${groupID}`
      );
      const scrapedGroup = await facebookScraperSession.scrapeGroup(groupID);
      console.log(scrapedGroup);
      console.log(
        "MemList Len Comp:",
        scrapedGroup.memberList?.length,
        scrapedGroup.memberCount
      );
      console.log(
        "PageList Len Comp:",
        scrapedGroup.pageList?.length,
        scrapedGroup.pageCount
      );
      console.log(
        "AdminList Len Comp:",
        scrapedGroup.adminModeratorList?.length,
        scrapedGroup.adminModeratorCount
      );
      await collection.insertOne(scrapedGroup);
    } catch (error) {
      console.error(`${groupID} | ${error.message}`);
    }
  }
  await scraper.close();
  await mongoClient.close();
  console.log("scraper closed");
})();
