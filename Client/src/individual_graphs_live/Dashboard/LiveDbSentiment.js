import React, { useEffect, useState } from "react";

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
  let cssColor = "";

  if (d >= 1.8) {
    smiley = "😊︎";
    cssColor = "#00c800";
  } else if (d < 1.7) {
    smiley = "☹︎";
    cssColor = "#c80000";
  } else {
    smiley = "😐︎";
    cssColor = "#e6c700";
  }

  return (
    <div>
      <p className="live">
        Stimmung: <span style={{ color: cssColor }}>{smiley}</span>
      </p>
    </div>
  );
}

export default LiveDbSentiment;
