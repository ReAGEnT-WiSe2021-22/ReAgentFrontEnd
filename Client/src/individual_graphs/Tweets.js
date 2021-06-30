import React, { useEffect, useState } from "react";
import TweetEmbed from "react-tweet-embed";
//import { Tweet } from "react-static-tweets";
//import "react-static-tweets/styles.css";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      var p = party[1];
      console.log(p);
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/" + p)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var newList = buildList(Object.values(data)[0]);
          setD(newList);
          setLoading(false); //stop loading when data is fetched
        });
    };
    fetchData();
  }, [party]);

  console.log(d);

  return isLoading ? ( //Checkif if is loading
    <CircularProgress />
  ) : (
    <div className="tweets">
      {d.map((ids) => (
        <TweetEmbed id={ids} />
      ))}
    </div>
  );
}
export default Tweets;
