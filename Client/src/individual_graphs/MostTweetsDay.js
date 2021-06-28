import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "@material-ui/core";

const options = {
  title: {
    display: true,
    text: "Most tweets day (2021)",
  },
  legend: {
    display: false,
  },
};

function MostTweetsDay({ party }) {
  const [vals, setVals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let party_val = Object.values(party)[0];

      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/mosttweetsday/" + party_val
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log("----------");
          // console.log(data[4][2021]);
          // console.log("----------");

          var vals = [
            JSON.parse(data[4][2021]["MONDAY"]),
            JSON.parse(data[4][2021]["TUESDAY"]),
            JSON.parse(data[4][2021]["WEDNESDAY"]),
            JSON.parse(data[4][2021]["THURSDAY"]),
            JSON.parse(data[4][2021]["FRIDAY"]),
            JSON.parse(data[4][2021]["SATURDAY"]),
            JSON.parse(data[4][2021]["SUNDAY"]),
          ];

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
              labels: [
                "Montag",
                "Dienstag",
                "Mittwoch",
                "Donnerstag",
                "Freitag",
                "Samstag",
                "Sonntag",
              ],
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

export default MostTweetsDay;
