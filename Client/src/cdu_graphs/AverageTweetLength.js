import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
const options = {
  title: {
    display: true,
    text: "Average Tweet Length",
  },
  legend: {
    display: false,
  },
};
function CDUGraphs() {
  const [averageTweets, setAverageTweets] = useState(0);

  useEffect(() => {
    /*const fetchData = async () => {
          await fetch("http://reagent1.f4.htw-berlin.de:9191/averagetweetlength")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              //console.log(data[CDU][2017]);
              setD(data);
            });
        };
        fetchData();*/

    var dum = [
      {
        "01": 523,
        "02": 619,
        "03": 760,
        "04": 923,
        "05": 57,
        "06": 234,
        "07": 123,
        "08": 653,
        "09": 77,
        10: 863,
        11: 485,
        12: 263,
      },
    ];
    setAverageTweets(dum[0]);
  }, []);

  console.log(averageTweets);

  return (
    <div className="charts">
      {
        <Bar
          data={{
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            datasets: [
              {
                data: [
                  averageTweets["01"],
                  averageTweets["02"],
                  averageTweets["03"],
                  averageTweets["04"],
                  averageTweets["05"],
                  averageTweets["06"],
                  averageTweets["07"],
                  averageTweets["08"],
                  averageTweets["09"],
                  averageTweets["10"],
                  averageTweets["11"],
                  averageTweets["12"],
                ],
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

export default CDUGraphs;
