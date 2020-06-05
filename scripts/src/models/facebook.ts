import { UUID, FacebookID, TimeStamp, Url, WholeNumber } from "./primitive";

export type FacebookGroupAboutScrape = {
  name: string;
  description: string;
  isPublic: boolean;
  locations: string[];
  foundedOn: TimeStamp;
  memberCount: WholeNumber;
  memberCountIncreaseWeekly: WholeNumber;
  postCountIncreaseDaily: WholeNumber;
  postCountIncreaseMonthly: WholeNumber;
};

export type FacebookGroupAdminsScrape = {
  adminModeratorCount: WholeNumber;
  adminModeratorList: FacebookID[];
};

export type FacebookGroupPagesScrape = {
  pageCount: WholeNumber;
  pageList: FacebookID[];
};

export type FacebookGroupMembersScrape = {
  memberList: FacebookID[];
};

export type FacebookGroupScrape = {
  id: FacebookID;
  scrapedAt: TimeStamp;
  scrapeID: UUID;
} & FacebookGroupAboutScrape &
  FacebookGroupAdminsScrape &
  FacebookGroupPagesScrape &
  FacebookGroupMembersScrape;

export type FacebookGroupPostScrape = {
  id: FacebookID;
  createdAt: TimeStamp;
  text: string;
  link: Url;
  likes: WholeNumber;
  shares: WholeNumber;
  comments: WholeNumber;
  groupID: FacebookID;
  memberID: FacebookID;
  scrapedAt: TimeStamp;
  scrapeID: UUID;
};
