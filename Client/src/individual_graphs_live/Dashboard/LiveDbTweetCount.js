import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

function LiveDbTweetCount({ party }) {
  const [d, setD] = useState();
  let partyName = Object.values(party)[1];

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/countTotalRunning/day/" +
          partyName
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setD(data[partyName]);
        });
    };
    fetchData();
  }, [party, partyName]);
  return (
    <div>
      <p className="live">
        Anzahl Tweets: <span style={{ color: "#1da1f2" }}>{d}</span>
      </p>
    </div>
  );
}

export default LiveDbTweetCount;
