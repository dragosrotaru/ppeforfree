import React from "react";
import { Table } from "../../components/table";
import data from "../../latest.json";
import "./style.css";

const columns = [
  {
    key: "_id",
    name: "Mongo ID",
    display: false,
  },
  {
    key: "id",
    name: "ID",
    display: false,
  },
  {
    key: "scrapeID",
    name: "Scrape Batch ID",
    display: false,
  },
  {
    key: "name",
    name: "Name",
  },
  {
    key: "isPublic",
    name: "Public",
  },
  {
    key: "foundedOn",
    name: "Created",
  },
  {
    key: "description",
    name: "Description",
  },
  {
    key: "locations",
    name: "Locations",
  },
  {
    key: "memberCount",
    name: "Members",
  },
  {
    key: "memberCountIncreaseWeekly",
    name: "Weekly Growth",
  },
  {
    key: "postCountIncreaseDaily",
    name: "Daily Posts",
  },
  {
    key: "postCountIncreaseMonthly",
    name: "Monthly Posts",
  },
  {
    key: "scrapedAt",
    name: "Last Updated",
  },
];

export const Directory = () => (
  <div>
    <h1>Directory</h1>
    <Table
      columns={columns.filter((col) => col.display !== false)}
      data={data}
    />
  </div>
);
