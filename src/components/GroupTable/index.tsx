import React from "react";
import "./style.css";

import FacebookGroup from "../../models/FacebookGroup";

type GroupTableProps = {
    columnList: (keyof FacebookGroup)[],
    data: FacebookGroup[],
}

const GroupTable = ({columnList, data}: GroupTableProps) => (
    <table className="fb-group-table">
        <GroupTableHeader columnList={columnList}/>
        {data.map((group: FacebookGroup) => (
            <GroupTableRow columnList={columnList} group={group}/>
        ))}
    </table>
);


type GroupTableHeaderProps = {
    columnList: (keyof FacebookGroup)[],
}

const GroupTableHeader = ({columnList}: GroupTableHeaderProps) => {
    interface ColumnNameMap {
        [key: string]: any;
    }
    const columnNameMap: ColumnNameMap = {
        name: "Name",
        isPublic: "Is Public",
        description: "Description",
        memberCount: "Member Count",
        adminCount: "Admin Count",
    }
    let headerElements = columnList.map(col => <th>{columnNameMap[col]}</th>);
    return <tr>{headerElements}</tr>
}


type GroupTableRowProps = {
    columnList: (keyof FacebookGroup)[],
    group: FacebookGroup
}

const GroupTableRow = ({columnList, group}: GroupTableRowProps) => {
    return (<tr>
        {columnList.map((col) => (
            <td>{group[col].toString()}</td>
        ))}
    </tr>)
}

export default GroupTable;