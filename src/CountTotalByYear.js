import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import numeral from "numeral";

function buildSPD(data) {
  const spd = [];
  for (let d in data) {
    if (data[d]._id.party == "SPD") {
      let spdnew = {
        x: data[d]._id.year,
        y: data[d].count,
      };
      spd.push(spdnew);
    }
  }
  return spd;
}
function buildFDP(data) {
  const fdp = [];
  for (let d in data) {
    if (data[d]._id.party == "FDP") {
      let fdpnew = {
        x: data[d]._id.year,
        y: data[d].count,
      };
      fdp.push(fdpnew);
    }
  }
  return fdp;
}
function buildAFD(data) {
  const afd = [];
  for (let d in data) {
    if (data[d]._id.party == "AfD") {
      let afdnew = {
        x: data[d]._id.year,
        y: data[d].count,
      };
      afd.push(afdnew);
    }
  }
  return afd;
}
function buildLinke(data) {
  const linke = [];
  for (let d in data) {
    if (data[d]._id.party == "Linke") {
      let linkenew = {
        x: data[d]._id.year,
        y: data[d].count,
      };
      linke.push(linkenew);
    }
  }
  return linke;
}
function buildGruen(data) {
  const gruen = [];
  for (let d in data) {
    if (data[d]._id.party == "B90") {
      let gruennew = {
        x: data[d]._id.year,
        y: data[d].count,
      };
      gruen.push(gruennew);
    }
  }
  return gruen;
}

function buildCDU(data) {
  const cdu = [];
  for (let d in data) {
    if (data[d]._id.party == "CDU") {
      let cdunew = {
        x: data[d]._id.year,
        y: data[d].count,
      };
      cdu.push(cdunew);
    }
  }
  return cdu;
}
function buildCSU(data) {
  const csu = [];
  for (let d in data) {
    if (data[d]._id.party == "CSU") {
      let csunew = {
        x: data[d]._id.year,
        y: data[d].count,
      };
      csu.push(csunew);
    }
  }
  return csu;
}
function buildParteilos(data) {
  const parteilos = [];
  for (let d in data) {
    if (data[d]._id.party == "Parteilos") {
      let parteilosnew = {
        x: data[d]._id.year,
        y: data[d].count,
      };
      parteilos.push(parteilosnew);
    }
  }
  return parteilos;
}

const options = {
  legend: {
    display: true,
  },
  elements: {
    point: {
      radius: 1,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  title: {
    display: true,
    text: "Anzahl Tweets pro Partei 2017 bis 2021",
  },
  scales: {
    xAxes: [{}],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

function CountTotalByYear() {
  const [cdu, setCDU] = useState(0);
  const [spd, setSPD] = useState(0);
  const [fdp, setFDP] = useState(0);
  const [afd, setAFD] = useState(0);
  const [linke, setLinke] = useState(0);
  const [gruen, setGruen] = useState(0);
  const [csu, setCSU] = useState(0);
  const [parteilos, setParteilos] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:8080/countTotalByYear")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data);
          let chartdataCDU = buildCDU(data);
          setCDU(chartdataCDU);
          let chartdataSPD = buildSPD(data);
          setSPD(chartdataSPD);
          let chartdataFDP = buildFDP(data);
          setFDP(chartdataFDP);
          let chartdataAFD = buildAFD(data);
          setAFD(chartdataAFD);
          let chartdataLinke = buildLinke(data);
          setLinke(chartdataLinke);
          let chartdataGruen = buildGruen(data);
          setGruen(chartdataGruen);
          let chartdataCSU = buildCSU(data);
          setCSU(chartdataCSU);
          let chartdataParteilos = buildParteilos(data);
          setParteilos(chartdataParteilos);

          console.log(chartdataSPD);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="charts">
      {
        <Bar
          data={{
            labels: [2017, 2018, 2019, 2020, 2021],
            datasets: [
              {
                label: "SPD",
                data: spd,
                backgroundColor: "rgba(255, 99, 132, 0.4)",
              },
              {
                label: "CDU",
                data: cdu,
                backgroundColor: "rgba(54, 162, 235, 0.4)",
              },
              {
                label: "FDP",
                data: fdp,
                backgroundColor: "rgba(255, 206, 86, 0.4)",
              },
              {
                label: "AfD",
                data: afd,
                backgroundColor: "rgba(75, 192, 192, 0.4)",
              },
              {
                label: "Linke",
                data: linke,
                backgroundColor: "rgba(153, 102, 255, 0.4)",
              },
              {
                label: "Grün",
                data: gruen,
                backgroundColor: "rgba(255, 159, 64, 0.4)",
              },
              {
                label: "CSU",
                data: csu,
                backgroundColor: "rgba(25, 255, 64, 0.4)",
              },
              {
                label: "Parteilos",
                data: parteilos,
                backgroundColor: "rgba(200, 19, 224, 0.4)",
              },
            ],
          }}
          options={options}
        />
      }
    </div>
  );
}
export default CountTotalByYear;
