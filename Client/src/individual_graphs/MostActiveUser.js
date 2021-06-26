import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const options = {
  title: {
    display: true,
    text: "Most active user (2021)",
  },
  legend: {
    display: false,
  },
};

function MostActiveUser({ party }) {
  const [vals, setVals] = useState([]);
  const [label, setLabel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //let party_key = Object.keys(party);
      let party_val = Object.values(party)[0];

      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/mostActiveUser/" + party_val
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log("----------");
          // console.log(data[4][2021][1]);
          // console.log("----------");

          var keys = [];
          var vals = [];

          for (let i = 1; i < 11; i++) {
            for (var key in data[4][2021][i]) {
              // console.log("Key: " + key);
              // console.log("Value: " + data[4][2021][i][key]);
              keys.push(key);
              vals.push(data[4][2021][i][key]);
            }
          }

          setLabel(keys);
          setVals(vals);
        });
    };
    fetchData();
  }, [party]);

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

export default MostActiveUser;
