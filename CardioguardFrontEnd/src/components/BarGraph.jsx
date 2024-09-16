// import * as React from "react";
import { BarPlot } from "@mui/x-charts";
import { LineHighlightPlot, LinePlot } from "@mui/x-charts";
import { ResponsiveChartContainer } from "@mui/x-charts";

import { ChartsXAxis } from "@mui/x-charts";
import { ChartsYAxis } from "@mui/x-charts";
import { ChartsTooltip } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";
import alphabetStock from "./data_sets/Data.json";

const series = [
  {
    type: "bar",
    yAxisId: "volume",
    label: "Volume",
    color: "lightgray",
    data: alphabetStock.map((day) => day.volume),
    highlightScope: { highlight: "item" },
  },
  {
    type: "line",
    yAxisId: "price",
    color: "red",
    label: "Low",
    data: alphabetStock.map((day) => day.low),
    highlightScope: { highlight: "item" },
  },
  {
    type: "line",
    yAxisId: "price",
    color: "green",
    label: "High",
    data: alphabetStock.map((day) => day.high),
  },
];

export default function BarGraph() {
  return (
    <div className="w-full">
      <h1 className="text-center text-2xl font-bold text-black py-20">
        Usages
      </h1>
      <div>
        <ResponsiveChartContainer
          series={series}
          height={400}
          margin={{ top: 10 }}
          xAxis={[
            {
              id: "date",
              data: alphabetStock.map((day) => new Date(day.date)),
              scaleType: "band",
              valueFormatter: (value) => value.toLocaleDateString(),
            },
          ]}
          yAxis={[
            {
              id: "price",
              scaleType: "linear",
            },
            {
              id: "volume",
              scaleType: "linear",
              valueFormatter: (value) =>
                `${(value / 1000000).toLocaleString()}M`,
            },
          ]}
        >
          <BarPlot />
          <LinePlot />
          <LineHighlightPlot />
          <ChartsXAxis
            label="date"
            position="bottom"
            axisId="date"
            tickInterval={(value, index) => {
              return index % 30 === 0;
            }}
            tickLabelStyle={{
              fontSize: 10,
            }}
          />
          <ChartsYAxis
            label="Price (USD)"
            position="left"
            axisId="price"
            tickLabelStyle={{ fontSize: 10 }}
            sx={{
              [`& .${axisClasses.label}`]: {
                transform: "translateX(-5px)",
              },
            }}
          />
          <ChartsYAxis
            label="Volume"
            position="right"
            axisId="volume"
            tickLabelStyle={{ fontSize: 10 }}
            sx={{
              [`& .${axisClasses.label}`]: {
                transform: "translateX(5px)",
              },
            }}
          />
          <ChartsTooltip />
        </ResponsiveChartContainer>
      </div>
    </div>
  );
}
