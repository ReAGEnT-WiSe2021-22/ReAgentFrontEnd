import React, { useEffect, useState } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import { Card } from "@material-ui/core";

const options = {
  type: "horizontalBar",
  title: {
    display: true,
    text: "★ Aktivster Benutzer (2021)",
  },
  legend: {
    display: false,
  },
};

function MostActiveUser({ party }) {
  const [vals, setVals] = useState([]);
  const [label, setLabel] = useState([]);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let party_val = Object.values(party)[1];

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
          setColor(Object.values(party)[2] + Object.values(party)[3]);
        });
    };
    fetchData();
  }, [party]);

  return (
    <div className="charts">
      {
        <Card>
          <HorizontalBar
            data={{
              labels: label,
              datasets: [
                {
                  data: vals,
                  backgroundColor: color, // 0.2
                  borderColor: color,
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

export default MostActiveUser;
