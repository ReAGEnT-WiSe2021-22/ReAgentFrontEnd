import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "@material-ui/core";

const options = {
  title: {
    display: true,
    text: "Most tweets time (2021)",
  },
  legend: {
    display: false,
  },
};

function MostTweetsTime({ party }) {
  const [vals, setVals] = useState([]);
  const [label, setLabel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let party_val = Object.values(party)[0];

      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/mosttweetstime/" + party_val
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log("----------");
          // console.log(data[4][2021][1]);
          // console.log("----------");

          var vals = [];
          var labels = [];

          for (let i = 0; i < 24; i++) {
            labels.push(i);
            vals.push(data[4][2021][i]);
          }

          setLabel(labels);
          setVals(vals);
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
              labels: label,
              datasets: [
                {
                  data: vals,
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
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

export default MostTweetsTime;
