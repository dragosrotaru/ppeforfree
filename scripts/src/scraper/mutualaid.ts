import axios, { AxiosResponse } from "axios";
import { MutualAidGroupScrape, MutualAidGroupScrapeRaw } from "../models";

export async function mutualAidScraper(): Promise<MutualAidGroupScrape[]> {
  const response: AxiosResponse<MutualAidGroupScrapeRaw[]> = await axios.get(
    "https://mutualaid.wiki/api/group/get"
  );
  let groups: MutualAidGroupScrape[] = response.data.map(({ id, ...rest }) => ({
    _id: id,
    ...rest,
  }));
  return groups;
}
