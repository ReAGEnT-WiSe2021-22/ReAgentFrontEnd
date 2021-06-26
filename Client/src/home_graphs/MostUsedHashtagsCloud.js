import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

const wordsaASDASD = [
  {
    text: "told",
    value: 64,
  },
  {
    text: "mistake",
    value: 11,
  },
  {
    text: "thought",
    value: 16,
  },
  {
    text: "bad",
    value: 17,
  },
];

const options = {
  //colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: true,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 2,
  rotations: 0,
  //rotationAngles: [0, 90],
  //scale: "sqrt",
  //spiral: "archimedean",
  transitionDuration: 1000,
};

//http://reagent1.f4.htw-berlin.de:8080/mostUsedHashtagsCloud/legislatur

// function MostUsedHashtagsCloud() {
//   return <ReactWordcloud words={words} />;
// }

function MostUsedHashtagsCloud() {
  //const [cdu, setCDU] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/mostUsedHashtagsCloud/legislatur"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("----------");
          console.log(data[2]["CDU"]["europa"]);
          console.log("----------");

          let keys = [];
          let vals = [];
          let words = [];

          // for (var key in data[2]["CDU"]) {
          //   // console.log("Key: " + key);
          //   // console.log("Value: " + data[2]["CDU"][key]);
          //   // keys.push(key);
          //   // vals.push(data[2]["CDU"][key]);
          //   words.push(
          //     '{text : "' + key + '", value: ' + data[2]["CDU"][key] + "}"
          //   );
          // }

          setWords(data[2]["CDU"]);
          console.log(words);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Configure options in the code editor!</p>
      <div style={{ height: 400, width: 600 }}>
        {/* <ReactWordcloud options={options} words={words} /> */}
      </div>
    </div>
  );
}

export default MostUsedHashtagsCloud;
