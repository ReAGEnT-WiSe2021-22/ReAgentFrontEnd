import React, { useEffect, useState } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import { Card } from "@material-ui/core";

const options = {
  title: {
    display: true,
    text: "★ Meist genutzten URLs (2021)",
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: true,
        ticks: {
          beginAtZero: true, // minimum value will be 0.
          min: 0,
          max: 600,
          stepSize: 100, // 1 - 2 - 3 ...
        },
      },
    ],
  },
};

function MostUsedUrls({ party }) {
  const [vals, setVals] = useState([]);
  const [labels, setLabel] = useState([]);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let party_val = Object.values(party)[1];

      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/mostUsedUrls/" + party_val
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log("----------");
          // console.log(data[4][2021][1]);
          // console.log("----------");

          var labels = [];
          var vals = [];

          for (let i = 1; i < 11; i++) {
            for (var key in data[4][2021][i]) {
              // console.log("Key: " + key);
              // console.log("Value: " + data[4][2021][i][key]);
              labels.push(key);
              vals.push(data[4][2021][i][key]);
            }
          }

          setVals([
            vals[0],
            vals[1],
            vals[2],
            vals[3],
            vals[4],
            vals[5],
            vals[6],
            vals[7],
            vals[8],
            vals[9],
          ]);

          setLabel(labels);
          setColor(Object.values(party)[2] + Object.values(party)[3]);
        });
    };
    fetchData();
  }, [party]);

  return (
    <div className="charts">
      {
        <Card>
          <HorizontalBar
            data={{
              labels: labels,
              datasets: [
                {
                  data: vals,
                  backgroundColor: color,
                  borderColor: color,
                },
              ],
            }}
            options={options}
          />
        </Card>
      }
    </div>
  );
}

export default MostUsedUrls;
