import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
const options = {
  title: {
    display: true,
    text: "Average Reply",
  },
  legend: {
    display: false,
  },
};
function AverageReply_cdu({ party }) {
  const [d, setD] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/averageReply")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (party == "cdu") {
            setD(data[0].CDU);
          } else if (party == "spd") {
            setD(data[5].SPD);
          } else if (party == "linke") {
            setD(data[1].Linke);
          } else if (party == "fdp") {
            setD(data[2].FDP);
          } else if (party == "afd") {
            setD(data[3].AfD);
          } else if (party == "gruen") {
            setD(data[4].B90);
          } else if (party == "csu") {
            setD(data[6].CSU);
          } else if (party == "parteilos") {
            setD(data[7].Parteilos);
          }
        });
    };
    fetchData();
  }, [party]);
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
                data: [d[2017], d[2018], d[2019], d[2020], d[2021]],
                backgroundColor: "rgba(54, 162, 235, 0.4)",
                borderColor: "rgba(54, 162, 235)",
              },
            ],
          }}
          options={options}
        />
      }
    </div>
  );
}

export default AverageReply_cdu;
