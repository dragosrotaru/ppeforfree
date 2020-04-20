export type UUID = string;
export type FacebookID = string;
export type TimeStamp = string;
export type Url = string;
export type WholeNumber = number;

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

export interface FacebookGroup {
  id: string;
  name?: string;
  isPublic?: boolean;
  description?: string;
  memberCount?: number;
  adminCount?: number;
  [key: string]: any;
}
