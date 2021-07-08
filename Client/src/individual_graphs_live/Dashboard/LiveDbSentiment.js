import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

function LiveDbSentiment({ party }) {
  const [d, setD] = useState();
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

  //let smileyArr = ["😊︎", "😐︎", "☹︎"];
  let smiley = "";

  if (d >= 1.8) {
    smiley = "😊︎";
  } else if (d < 1.7) {
    smiley = "☹︎";
  } else {
    smiley = "😐︎";
  }

  return (
    <Card>
      <p>Stimmung: {smiley}</p>
    </Card>
  );
}

export default LiveDbSentiment;
