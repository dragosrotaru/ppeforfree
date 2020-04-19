import React from "react";
import "./style.css";

import GroupTable from "../../components/GroupTable"
import FacebookGroup from "../../models/FacebookGroup";

const columnList: string[] = ["name", "isPublic", "description", "memberCount", "adminCount"];
const data: FacebookGroup[] = [
  {
    id: "12345",
    name: "Test Group",
    isPublic: true,
    description: "This is a test group description",
    memberCount: 100,
    adminCount: 2
  },
  {
    id: "12345",
    name: "Test Group",
    isPublic: true,
    description: "This is a test group description",
    memberCount: 100,
    adminCount: 2
  },
  {
    id: "12345",
    name: "Test Group",
    isPublic: true,
    description: "This is a test group description",
    memberCount: 100,
    adminCount: 2
  },
];

export const Directory = () => (
  <div>
    <h1>Directory</h1>
    <GroupTable columnList={columnList} data={data}/>
  </div>
);
