import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

function LiveDbHashtags({ party }) {
  const [d, setD] = useState(0);
  let partyName = Object.values(party)[1];

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/liveHashtags/day/" + partyName
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
    <Card>
      <p>Meist benutzes Hashtag: {d}</p>
    </Card>
  );
}

export default LiveDbHashtags;
