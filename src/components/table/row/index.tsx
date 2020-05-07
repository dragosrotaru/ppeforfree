import React from "react";
import {Columns} from "../index";

type Props = {
  columns: Columns[];
  data: {[key: string]: any};
};

export const TableRow = ({columns, data}: Props) => (
  <tr>
    {columns.map((col) => (
      <td key={col.key}>{data[col.key] !== undefined ? data[col.key] : "n/a"}</td>
    ))}
  </tr>
);
