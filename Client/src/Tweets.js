import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import TweetEmbed from "react-tweet-embed";

function buildList(data) {
  var list = [];
  console.log(data);
  for (var i in data) {
    list.push(data[i]);
  }
  return list;
}

function Tweets({ party }) {
  const [d, setD] = useState([0]);

  useEffect(() => {
    const fetchData = async () => {
      var p = Object.values(party);
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/" + p)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var newList = buildList(Object.values(data)[0]);
          setD(newList);
        });
    };
    fetchData();
  }, [party]);

  console.log(d);

  return (
    <div className="tweets">
      {d.map((ids) => (
        <TweetEmbed id={ids} />
      ))}
    </div>
  );
}
export default Tweets;
