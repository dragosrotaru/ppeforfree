import fs from "fs";

export const writeToJSON = (filepath: string, data: any) => {
  JSON.stringify(data, null, 2);
  fs.writeFile(filepath, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
  });
};
