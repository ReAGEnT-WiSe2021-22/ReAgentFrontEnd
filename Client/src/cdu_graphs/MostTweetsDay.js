import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import ReactWordcloud from "react-wordcloud";

const options = {
  title: {
    display: true,
    text: "Most tweets day",
  },
  legend: {
    display: false,
  },
};

function MostTweetsDay() {
  const [vals, setVals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/mosttweetsday/CDU")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("----------");
          console.log(data[4][2021][1]);
          console.log("----------");

          var keys = [];
          var vals = [];

          for (let i = 1; i < 8; i++) {
            for (var key in data[4][2021][i]) {
              console.log("Key: " + key);
              console.log("Value: " + data[4][2021][i][key]);
              keys.push(key);
              vals.push(data[4][2021][i][key]);
            }
          }

          setVals(vals);
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
      }
    </div>
  );
}

export default MostTweetsDay;
