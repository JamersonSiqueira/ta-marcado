import React from "react";
import { Bar } from "react-chartjs-2";

const ChartBar = ({ data }) => {

  return (
    <Bar
      data={data}
      options={{ 
        responsive: true,
        height: "600px",
        width: "600px",
        scaleStartValue: 0
      }}
    />
  );
};

export default ChartBar;
