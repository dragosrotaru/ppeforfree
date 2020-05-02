import React from "react";
import {Columns} from "../index";

type props = {
  columns: Columns[];
};

export const TableHeader = ({columns}: props) => (
  <thead>
    <tr>
      {columns.map((col) => (
        <th key={col.key}>{col.name}</th>
      ))}
    </tr>
  </thead>
);
