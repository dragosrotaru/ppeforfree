import React from "react";
import data from "../../latest.json";
import "./style.css";
import NodeGraph from "../../components/area-graph/index";

export const Graph = () => {
    console.log(data)
    return (
        <div>
            <h1>Graph</h1>
            <NodeGraph />
        </div>
        )
}