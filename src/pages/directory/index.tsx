import React from "react";
import { Table } from "../../components/table";
import data from "../../latest.json";
import "./style.css";

const columns = [
  {
    key: "name",
    name: "Name",
  },
  {
    key: "isPublic",
    name: "Public",
  },
  {
    key: "description",
    name: "Description",
  },
  {
    key: "memberCount",
    name: "Members",
  },
];

export const Directory = () => (
  <div>
    <h1>Directory</h1>
    <Table columns={columns} data={data} />
  </div>
);
