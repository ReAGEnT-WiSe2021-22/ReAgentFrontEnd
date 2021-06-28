import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "@material-ui/core";

const options = {
  title: {
    display: true,
    text: "Most used hashtags (2021)",
  },
  legend: {
    display: false,
  },
};

function MostUsedHashtags({ party }) {
  const [vals, setVals] = useState([]);
  const [labels, setLabel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let party_val = Object.values(party)[0];

      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/mostUsedHashtags/" + party_val
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

          for (let i = 1; i < 6; i++) {
            for (var key in data[4][2021][i]) {
              // console.log("Key: " + key);
              // console.log("Value: " + data[4][2021][i][key]);
              labels.push(key);
              vals.push(data[4][2021][i][key]);
            }
          }

          setVals(
            [vals[0], vals[1], vals[2], vals[3], vals[4]]
            // vals[5],
            // vals[6],
            // vals[7],
            // vals[8],
            // vals[9]
          );

          setLabel(labels);
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
              labels: labels,
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

export default MostUsedHashtags;
