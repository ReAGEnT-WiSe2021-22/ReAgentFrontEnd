import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import ReactWordcloud from "react-wordcloud";

const options = {
  title: {
    display: true,
    text: "Most tweets time",
  },
  legend: {
    display: false,
  },
};

function MostTweetsTime() {
  const [vals, setVals] = useState([]);
  const [label, setLabel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/mosttweetstime/CDU")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("----------");
          console.log(data[4][2021][1]);
          console.log("----------");

          var keys = [];
          var vals = [];
          var labels = [];

          for (let i = 1; i < 25; i++) {
            for (var key in data[4][2021][i]) {
              console.log("Key: " + key);
              console.log("Value: " + data[4][2021][i][key]);
              labels.push(i);
              keys.push(key);
              vals.push(data[4][2021][i][key]);
            }
          }

          setLabel(labels);
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
      }
    </div>
  );
}

export default MostTweetsTime;
