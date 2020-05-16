import React from "react";
import {Table as AntDTable} from "antd";

export type Columns = {
  key: string;
  dataIndex: string;
  title: string;
  sorter?: any;
};

export type InitiativeTableRow = {
  memberCount: number;
  memberCountIncreaseWeekly: number;
  postCountIncreaseDaily: number;
  postCountIncreaseMonthly: number;
};

type Props = {
  columns: Columns[];
  data: {[key: string]: any}[];
};

export const InitiativeTable = ({columns, data}: Props) => (
  <AntDTable
    columns={columns}
    dataSource={data}
    rowKey="_id"
    pagination={{pageSize: 50, position: ["bottomCenter"]}}
  />
);
