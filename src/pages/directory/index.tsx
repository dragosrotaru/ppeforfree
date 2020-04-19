import React from "react";
import "./style.css";

import GroupTable from "../../components/GroupTable"
import FacebookGroup from "../../models/FacebookGroup";

const columnList: string[] = ["id", "name", "isPublic"];
const data: FacebookGroup[] = [{
  "id": "12345",
  "name": "Test Group",
  "isPublic": true
}];

export const Directory = () => (
  <div>
    <h1>Directory</h1>
    <GroupTable columnList={columnList} data={data}/>
  </div>
);
