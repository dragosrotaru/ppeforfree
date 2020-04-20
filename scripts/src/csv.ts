import fs from "fs";
import Papa from "papaparse";
import { FacebookID } from "./models";

export const parseIndexFile = (): FacebookID[] => {
  const filePath = process.env.FB_GROUPS_IDS_FILEPATH;
  if (typeof filePath !== "string" || filePath.indexOf(".csv") === -1) {
    throw new Error("invalid file name provided");
  }
  const file = fs.readFileSync(filePath, "utf8");
  const results = Papa.parse(file, {
    delimiter: ",",
  });
  if (results.errors.length > 0) {
    console.error(results.errors);
    throw new Error("papa parse error");
  }
  return results.data.map(entry => entry[0]);
};
