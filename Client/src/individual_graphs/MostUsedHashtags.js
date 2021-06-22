import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import ReactWordcloud from "react-wordcloud";

// function buildFifth(data) {
//   const words = [];
//   for (let d in data) {
//     /*let new = {
//         text: data[d].d,
//         value:
//       }*/
//   }
// }

const options = {
  title: {
    display: true,
    text: "Most used hashtags",
  },
  legend: {
    display: false,
  },
};

function MostUsedHashtags() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fifth, setFifth] = useState(0);
  const [label, setLabel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/mostUsedHashtags/CDU")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("----------");
          console.log(data[4][2021][1]);
          console.log("----------");

          var keys = [];
          var vals = [];

          for (let i = 1; i < 6; i++) {
            for (var key in data[4][2021][i]) {
              console.log("Key: " + key);
              console.log("Value: " + data[4][2021][i][key]);
              keys.push(key);
              vals.push(data[4][2021][i][key]);
            }
          }

          setFirst(vals[0]);
          setSecond(vals[1]);
          setThird(vals[2]);
          setFourth(vals[3]);
          setFifth(vals[4]);
          setLabel(keys);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="charts">
      {
        <Bar
          data={{
            labels: [label[0], label[1], label[2], label[3], label[4]],
            datasets: [
              {
                data: [first, second, third, fourth, fifth],
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

export default MostUsedHashtags;
