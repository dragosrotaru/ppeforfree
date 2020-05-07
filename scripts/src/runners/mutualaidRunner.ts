import { mutualAidScraper } from "../scraper/mutualaid";
import { MongoClient } from "mongodb";

export const mutualaidRunner = async () => {
  const groups = await mutualAidScraper();

  const mongoClient = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  await mongoClient.connect();
  const db = mongoClient.db("ppeforfree");
  const collection = db.collection("mutualaid-groups-scrapes");

  for (const group of groups) {
    await collection.replaceOne({ _id: group._id }, group, { upsert: true });
  }

  await mongoClient.close();
};
