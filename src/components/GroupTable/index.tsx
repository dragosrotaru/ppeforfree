import React from "react";
import "./style.css";

import FacebookGroup from "../../models/FacebookGroup";

type GroupTableProps = {
    columnList: string[],
    data: FacebookGroup[],
}

const GroupTable = ({columnList, data}: GroupTableProps) => (
    <table className="fb-group-table">
        <tr>
            {columnList.map((col: string) => <th>{col}</th>)}
        </tr>
        {data.map((group: FacebookGroup) => (
            <tr>
                {columnList.map((col: string) => (
                    <td>{group[col].toString()}</td>
                ))}
            </tr>
        ))}
    </table>
);

export default GroupTable;