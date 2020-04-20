import React from "react";
import { TableHeader } from "./header";
import { TableRow } from "./row";
import "./style.css";

export type Columns = {
  key: string;
  name: string;
};

type Props = {
  columns: Columns[];
  data: { [key: string]: any }[];
};

export const Table = ({ columns, data }: Props) => (
  <table className="table">
    <TableHeader columns={columns} />
    <tbody>
      {data.map((data) => (
        <TableRow key={data.id} columns={columns} data={data} />
      ))}
    </tbody>
  </table>
);
