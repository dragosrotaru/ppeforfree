import {InitiativeTableRow} from "src/components/table/InitiativeTable";

export const INITIATIVE_TABLE_COLUMNS = [
  {
    key: "_id",
    dataIndex: "_id",
    title: "Mongo ID",
    display: false,
  },
  {
    key: "id",
    dataIndex: "id",
    title: "ID",
    display: false,
  },
  {
    key: "scrapeID",
    dataIndex: "scrapeID",
    title: "Scrape Batch ID",
    display: false,
  },
  {
    key: "modal",
    dataIndex: "modal",
    title: "",
  },
  {
    key: "name",
    dataIndex: "name",
    title: "",
  },
  {
    key: "description",
    dataIndex: "description",
    title: "Description",
    responsive: ["sm"],
  },
  {
    key: "locations",
    dataIndex: "locations",
    title: "Locations",
    responsive: ["sm"],
  },
  {
    key: "scrapedAt",
    dataIndex: "scrapedAt",
    title: "Last Updated",
    responsive: ["lg"],
  },
  {
    key: "foundedOn",
    dataIndex: "foundedOn",
    title: "Created",
    responsive: ["lg"],
  },
  {
    key: "memberCount",
    dataIndex: "memberCount",
    title: "Members",
    responsive: ["xl"],
    sorter: (a: InitiativeTableRow, b: InitiativeTableRow) =>
      a.memberCount - b.memberCount,
  },
  {
    key: "memberCountIncreaseWeekly",
    dataIndex: "memberCountIncreaseWeekly",
    title: "Weekly Growth",
    responsive: ["xxl"],
    sorter: (a: InitiativeTableRow, b: InitiativeTableRow) =>
      a.memberCountIncreaseWeekly - b.memberCountIncreaseWeekly,
  },
  {
    key: "postCountIncreaseDaily",
    dataIndex: "postCountIncreaseDaily",
    title: "Daily Posts",
    responsive: ["xl"],
    sorter: (a: InitiativeTableRow, b: InitiativeTableRow) =>
      a.postCountIncreaseDaily - b.postCountIncreaseDaily,
  },
  {
    key: "postCountIncreasMonthly",
    dataIndex: "postCountIncreaseMonthly",
    title: "Monthly Posts",
    responsive: ["xxl"],
    sorter: (a: InitiativeTableRow, b: InitiativeTableRow) =>
      a.postCountIncreaseMonthly - b.postCountIncreaseMonthly,
  },
];
