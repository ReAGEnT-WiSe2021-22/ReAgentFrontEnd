import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
const options = {
  title: {
    display: true,
    text: "Average Likes",
  },
  legend: {
    display: false,
  },
};
function AverageLikesTweets_cdu({ party }) {
  const [d, setD] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/averagelikestweet")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setD(data[Object.keys(party)][Object.values(party)[0]]);
        });
    };
    fetchData();
  }, [party]);
  return (
    <div className="charts">
      {
        <Line
          data={{
            labels: [2017, 2018, 2019, 2020, 2021],
            datasets: [
              {
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

export default AverageLikesTweets_cdu;
