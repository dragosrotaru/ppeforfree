import React from 'react';
import './style.css'
import data from "../../latest.json";

const dataSlice = data.slice(10, 20);

const max = Math.max.apply(Math, dataSlice.map(function(o) { return o.memberCount; }))
const min = Math.min.apply(Math, dataSlice.map(function(o) { return o.memberCount; }))

const nodes = dataSlice.map(point => {
  return { id: point.id, x: random(), y: random(), r:normalize(point.memberCount), fill: getFill(point.isPublic) }
})

function normalize(num){
  return ((num-min)/(max-min))*80
}

function random() {
  return 10 + Math.random() * (550 - 10);
}

function getFill(isPrivate){
  return isPrivate ? 'red' : 'green'
}

const links = [
  { id: 1, source: nodes[0], target: nodes[1] },
  { id: 2, source: nodes[1], target: nodes[2] },
  { id: 3, source: nodes[2], target: nodes[0] }
];

const circles = nodes.map(node => {
  return (<circle key={node.id} cx={node.x} cy={node.y} r={node.r} strokeWidth="2" stroke="black" fill={node.fill} />)
})

const lines = links.map(link => {
  return (<line key={link.id} x1={link.source.x} y1={link.source.y} x2={link.target.x} y2={link.target.y} strokeWidth="2" stroke="#999" strokeOpacity="0.6"></line>)
})

function NodeGraph ({ width, height }) {
  return (
    <svg className="center" width={width} height={height}>
      <rect width={width} height={height} rx={10} fill="#272b4d" />
      {lines}
      {circles}
    </svg>
  );
};

export default NodeGraph