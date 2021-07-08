import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

function LiveDbSentiment({ party }) {
  const [d, setD] = useState(0);
  let partyName = Object.values(party)[1];

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/liveSentiment/day/" + partyName
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

  let smileyArr = ["😊︎", "😐︎", "☹︎"];
  let smiley = "";

  if (d > 2) {
    smiley = smileyArr[0];
  } else if (false) {
    // placeholder
    smiley = smileyArr[1];
  } else {
    smiley = smileyArr[2];
  }

  return (
    <Card>
      <p>Stimmung: {smiley}</p>
    </Card>
  );
}

export default LiveDbSentiment;
