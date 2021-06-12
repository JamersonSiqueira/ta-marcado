import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ data }) => {

  return (
    <Line
      data={data}
      options={{ responsive: true, height: "600px", width: "600px" }}
    />
  );
};

export default Chart;
