import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import ReactWordcloud from "react-wordcloud";

function buildFifth(data) {
  const words = [];
  for (let d in data) {
    /*let new = {
        text: data[d].d,
        value: 
      }*/
  }
}
function MostUsedHashtags() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fifth, setFifth] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/mostUsedHashtags/CDU")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFirst(data[0][2017]);
          setSecond(data[1][2018]);
          setThird(data[2][2019]);
          setFourth(data[3][2020]);
          setFifth(data[4][2021]);
        });
    };
    fetchData();
  }, []);

  return <div>i</div>;
}

export default MostUsedHashtags;
