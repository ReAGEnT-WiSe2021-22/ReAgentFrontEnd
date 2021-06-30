import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Card } from "@material-ui/core";
const options = {
  title: {
    display: true,
    text: "Average Retweets",
  },
  legend: {
    display: false,
  },
};
function AverageRetweets_individual({ party }) {
  const [d, setD] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/averagelikestweet")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setD(data[Object.values(party)[0]][Object.values(party)[1]]);
          setColor(Object.values(party)[2] + Object.values(party)[3]);
        });
    };
    fetchData();
  }, [party]);
  return (
    <div className="charts">
      {
        <Card>
          <Line
            data={{
              labels: [2017, 2018, 2019, 2020, 2021],
              datasets: [
                {
                  fill: false,
                  data: [d[2017], d[2018], d[2019], d[2020], d[2021]],
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

export default AverageRetweets_individual;