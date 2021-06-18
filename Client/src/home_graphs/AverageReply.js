import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

const options = {
  title: {
    display: true,
    text: "Average Reply",
  },
  legend: {
    display: true,
  },
};
function AverageReply() {
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
      await fetch("http://reagent1.f4.htw-berlin.de:8080/averageReply")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCDU(data[0].CDU);
          setLinke(data[1].Linke);
          setFDP(data[2].FDP);
          setAfD(data[3].AfD);
          setGruen(data[4].B90);
          setSPD(data[5].SPD);
          setCSU(data[6].CSU);
          setParteilos(data[7].Parteilos);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="charts">
      {
        <Line
          title
          data={{
            labels: [2017, 2018, 2019, 2020, 2021],
            datasets: [
              {
                label: "CDU",
                fill: false,
                data: [cdu[2017], cdu[2018], cdu[2019], cdu[2020], cdu[2021]],
                backgroundColor: "rgba(54, 162, 235, 0.4)",
                borderColor: "rgba(54, 162, 235)",
              },
              {
                label: "Linke",
                fill: false,
                data: [
                  linke[2017],
                  linke[2018],
                  linke[2019],
                  linke[2020],
                  linke[2021],
                ],
                backgroundColor: "rgba(255, 206, 86, 0.4)",
                borderColor: "rgba(255, 206, 86)",
              },
              {
                label: "FDP",
                fill: false,
                data: [fdp[2017], fdp[2018], fdp[2019], fdp[2020], fdp[2021]],
                backgroundColor: "rgba(55, 9, 232, 0.4)",
                borderColor: "rgba(55, 9, 232)",
              },
              {
                label: "AfD",
                fill: false,
                data: [afd[2017], afd[2018], afd[2019], afd[2020], afd[2021]],
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                borderColor: "rgba(75, 192, 192)",
              },
              {
                label: "Grün",
                fill: false,
                data: [
                  gruen[2017],
                  gruen[2018],
                  gruen[2019],
                  gruen[2020],
                  gruen[2021],
                ],
                backgroundColor: "rgba(153, 102, 255, 0.4)",
                borderColor: "rgba(153, 102, 255)",
              },
              {
                label: "SPd",
                fill: false,
                data: [spd[2017], spd[2018], spd[2019], spd[2020], spd[2021]],
                backgroundColor: "rgba(255, 159, 64, 0.4)",
                borderColor: "rgba(255, 159, 64)",
              },
              {
                label: "CSU",
                fill: false,
                data: [csu[2017], csu[2018], csu[2019], csu[2020], csu[2021]],
                backgroundColor: "rgba(25, 255, 64, 0.4)",
                borderColor: "rgba(25, 255, 64)",
              },
              {
                label: "Parteilos",
                fill: false,
                data: [
                  parteilos[2017],
                  parteilos[2018],
                  parteilos[2019],
                  parteilos[2020],
                  parteilos[2021],
                ],
                backgroundColor: "rgba(200, 19, 224, 0.4)",
                borderColor: "rgba(200, 19, 224)",
              },
            ],
          }}
          options={options}
        />
      }
    </div>
  );
}

export default AverageReply;
