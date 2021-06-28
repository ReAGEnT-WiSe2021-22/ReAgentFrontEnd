import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Card } from "@material-ui/core";
const options = {
  title: {
    display: true,
    text: "Live Sentiment this Month",
  },
  legend: {
    display: false,
  },
};
function LiveSentiment({ party }) {
  const [d, setD] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveSentiment/month")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setD(data[Object.keys(party)][Object.values(party)[0]]);
        });
    };
    fetchData();
  }, [party]);
  return (
    <div className="charts">
      {
        <Card>
          <Bar
            data={{
              labels: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
              ],
              datasets: [
                {
                  fill: false,
                  data: [
                    d[1],
                    d[2],
                    d[3],
                    d[4],
                    d[5],
                    d[6],
                    d[7],
                    d[8],
                    d[9],
                    d[10],
                    d[11],
                    d[12],
                    d[13],
                    d[14],
                    d[15],
                    d[16],
                    d[17],
                    d[18],
                    d[19],
                    d[20],
                    d[21],
                    d[22],
                    d[23],
                    d[24],
                    d[25],
                    d[26],
                    d[27],
                    d[28],
                    d[29],
                    d[30],
                  ],
                  backgroundColor: "rgba(54, 162, 235, 0.4)",
                  borderColor: "rgba(54, 162, 235)",
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

export default LiveSentiment;
