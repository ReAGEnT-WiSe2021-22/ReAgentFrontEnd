//import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

const words = [
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

//http://reagent1.f4.htw-berlin.de:8080/mostUsedHashtags/2020/month/CDU

function MostUsedHashtagsCloud() {
  return <ReactWordcloud words={words} />;
}

// function MostUsedHashtags() {
//   const [cdu, setCDU] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch(
//         "http://reagent1.f4.htw-berlin.de:8080/mostUsedHashtags/2020/month/CDU"
//       )
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           setCDU(data[0][1].CDU);
//         });
//     };
//     fetchData();
//   }, []);
//   return <ReactWordcloud words={words} />;
// }

export default MostUsedHashtagsCloud;
