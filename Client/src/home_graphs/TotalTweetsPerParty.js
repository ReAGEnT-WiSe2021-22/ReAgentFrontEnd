import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

function buildChartData(data) {
  const chartdata = [];
  for (let d in data) {
    chartdata.push(data[d].count);
  }
  console.log(chartdata);
  return chartdata;
}

function Charts() {
  const [d, setD] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:8080/countTotalByParty")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let chartData = buildChartData(data);
          setD(chartData);
          console.log(chartData);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="charts">
      {
        <Bar
          data={{
            labels: [
              "Linke",
              "SPD",
              "FPD",
              "Grün",
              "CDU",
              "AfD",
              "Parteilos",
              "CSU",
            ],
            datasets: [
              {
                label: "total tweets 2017-2021",
                data: d,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
              },
            ],
          }}
        />
      }
    </div>
  );
}
export default Charts;
