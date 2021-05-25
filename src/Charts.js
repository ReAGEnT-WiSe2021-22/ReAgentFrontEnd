import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";

//const hour = [];
function buildSPD(data) {
  const spd = [];
  for (let d in data) {
    if (data[d]._id.party == "SPD") {
      let spdnew = {
        x: data[d]._id.hour,
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
        x: data[d]._id.hour,
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
        x: data[d]._id.hour,
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
        x: data[d]._id.hour,
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
        x: data[d]._id.hour,
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
        x: data[d]._id.hour,
        y: data[d].count,
      };
      cdu.push(cdunew);
    }
  }
  return cdu;
}
const t = [];
let parties = new Set([]);

function Charts() {
  const [cdu, setCDU] = useState(0);
  const [spd, setSPD] = useState(0);
  const [fdp, setFDP] = useState(0);
  const [afd, setAFD] = useState(0);
  const [linke, setLinke] = useState(0);
  const [gruen, setGruen] = useState(0);

  const [hour, setHour] = useState({});
  const options = {
    responsive: true,
    tooltips: {
      mode: "label",
    },
    elements: {
      line: {
        fill: false,
      },
    },
    scales: {
      xAxes: [
        {
          display: true,
        },
      ],
      yAxes: [],
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:8080/jsonProcessed")
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

          /*for (let d in data) {
            t.push(data[d]._id.hour);
          }
          setHour(t);*/
        });
    };
    fetchData();
  }, []);
  return (
    <div className="charts">
      {
        <Bar
          data={{
            labels: [15, 16, 17, 18, 19, 20, 21, 22],
            datasets: [
              {
                label: "CDU",
                data: cdu,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
              },
              {
                label: "SPD",
                data: spd,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
              },
              {
                label: "FDP",
                data: fdp,
                backgroundColor: "rgba(255, 206, 86, 0.2)",
              },
              {
                label: "AFD",
                data: afd,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
              },
              {
                label: "Linke",
                data: linke,
                backgroundColor: "rgba(153, 102, 255, 0.2)",
              },
              {
                label: "Gruen",
                data: gruen,
              },
            ],
          }}
          //options={options}
        />
      }
    </div>
  );
}
export default Charts;
