import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

function buildData(data) {
  let chartData = [];

  for (let d in data) {
    let newData = {
      text: d,
      value: data[d],
    };
    chartData.push(newData);
  }
  console.log(chartData);
  return chartData;
}
function WordCloud() {
  const [d, setD] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/mostUsedHashtagsCloud/CDU"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data[4]);
          let chartData = buildData(data[4][2021]);
          setD(chartData);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      <ReactWordcloud words={d} />
    </div>
  );
}

export default WordCloud;
