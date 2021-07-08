import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

function LiveDbMostActive({ party }) {
  const [d, setD] = useState();
  let partyName = Object.values(party)[1];

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "http://reagent1.f4.htw-berlin.de:8080/liveMostActiveUser/day/" +
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
    <Card>
      <p>
        Aktivster Benutzer:{" "}
        <a href={"https://twitter.com/" + String(d)}>@{d}</a>
      </p>
    </Card>
  );
}

export default LiveDbMostActive;
