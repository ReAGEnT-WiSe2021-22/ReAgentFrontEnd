import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "@material-ui/core";

const options = {
  title: {
    display: true,
    text: "∑ Tweets pro Jahr",
  },
  legend: {
    display: true,
  },
  scales: {
    yAxes: [
      {
        display: true,
        ticks: {
          beginAtZero: true, // minimum value will be 0.
          min: 0,
          max: 50000,
          stepSize: 10000, // 1 - 2 - 3 ...
        },
      },
    ],
  },
};

function CountTotalByYear({ parties }) {
  const [cdu, setCDU] = useState(0);
  const [spd, setSPD] = useState(0);
  const [fdp, setFDP] = useState(0);
  const [afd, setAfD] = useState(0);
  const [linke, setLinke] = useState(0);
  const [gruen, setGruen] = useState(0);
  const [csu, setCSU] = useState(0);
  const [parteilos, setParteilos] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/countTweetByMonth")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAfD(data[0].AfD);
          setGruen(data[1].B90);
          setCDU(data[2].CDU);
          setCSU(data[3].CSU);
          setFDP(data[4].FDP);
          setLinke(data[5].Linke);
          setParteilos(data[6].Parteilos);
          setSPD(data[7].SPD);
        });
    };
    fetchData();
  }, [parties]);
  return (
    <div className="charts">
      {
        <Card>
          <Bar
            data={{
              labels: [2017, 2018, 2019, 2020, 2021],
              datasets: [
                {
                  label: "CDU",
                  data: [cdu[2017], cdu[2018], cdu[2019], cdu[2020], cdu[2021]],
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                },
                {
                  label: "SPD",
                  data: [spd[2017], spd[2018], spd[2019], spd[2020], spd[2021]],
                  backgroundColor: "rgba(255, 0, 0, 0.75)",
                },
                {
                  label: "Grüne",
                  data: [
                    gruen[2017],
                    gruen[2018],
                    gruen[2019],
                    gruen[2020],
                    gruen[2021],
                  ],
                  backgroundColor: "rgba(0, 255, 0, 0.75)",
                },
                {
                  label: "FDP",
                  data: [fdp[2017], fdp[2018], fdp[2019], fdp[2020], fdp[2021]],
                  backgroundColor: "rgba(255, 255, 0, 0.75)",
                },
                {
                  label: "Linke",
                  data: [
                    linke[2017],
                    linke[2018],
                    linke[2019],
                    linke[2020],
                    linke[2021],
                  ],
                  backgroundColor: "rgba(255, 0, 175, 0.75)",
                },
                {
                  label: "CSU",
                  data: [csu[2017], csu[2018], csu[2019], csu[2020], csu[2021]],
                  backgroundColor: "rgba(53, 61, 255, 0.75)",
                },
                {
                  label: "AfD",
                  data: [afd[2017], afd[2018], afd[2019], afd[2020], afd[2021]],
                  backgroundColor: "rgba(53, 185, 255, 0.75)",
                },
                {
                  label: "Parteilos",
                  data: [
                    parteilos[2017],
                    parteilos[2018],
                    parteilos[2019],
                    parteilos[2020],
                    parteilos[2021],
                  ],
                  backgroundColor: "rgba(125, 125, 125, 0.75)",
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
export default CountTotalByYear;
