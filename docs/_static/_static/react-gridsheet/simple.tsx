import React from "react";
import GridSheet, { aa2oa, oa2aa } from "react-gridsheet";

export const Simple: React.FC = () => {
  const data = [
    ["a", "b", "c", "d", "e"],
    [1, 2, 3, 4, 5],
    ["f", "g", "h", "i", "j"],
  ];
  return <GridSheet
    data={data}
  />
};
