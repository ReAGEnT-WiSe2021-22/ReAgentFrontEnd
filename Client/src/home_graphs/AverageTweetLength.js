import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import numeral from "numeral";

function AverageTweetLength() {
  const [cdu, setCDU] = useState(0);
  const [spd, setSPD] = useState(0);
  const [linke, setLinke] = useState(0);

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
        CDU: {
          2017: 523,
          2018: 619,
          2019: 760,
          2020: 923,
          2021: 57,
        },
      },
      {
        SPD: {
          2017: 123,
          2018: 323,
          2019: 470,
          2020: 1200,
          2021: 69,
        },
      },
      {
        Linke: {
          2017: 333,
          2018: 444,
          2019: 555,
          2020: 111,
          2021: 91,
        },
      },
    ];

    console.log(dum);
    //for (let i in datas) {
    //console.log(datas[i].CDU);
    //var s = buildCDU(datas);
    //console.log(s);
    setCDU(dum[0].CDU);
    setSPD(dum[1].SPD);
    setLinke(dum[2].Linke);
    //console.log(dum);
    //}
  }, []);

  return (
    <div className="charts">
      {
        <Bar
          data={{
            labels: [2017, 2018, 2019, 2020, 2021],
            datasets: [
              {
                label: "CDU",
                data: [cdu[2017], cdu[2018], cdu[2019], cdu[2020], cdu[2021]],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
              },
              {
                label: "SPD",
                data: [spd[2017], spd[2018], spd[2019], spd[2020], spd[2021]],
                backgroundColor: "rgba(154, 2, 235, 0.2)",
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
                backgroundColor: "rgba(4, 232, 5, 0.2)",
              },
            ],
          }}
        />
      }
    </div>
  );
}

export default AverageTweetLength;
