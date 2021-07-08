import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

function LiveDbHashtags({ party }) {
  const [d, setD] = useState();
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
    <div>
      <p className="live">
        Meist benutzes Hashtag:{" "}
        <a
          href={"https://twitter.com/hashtag/" + d}
          target="_blank"
          style={{ color: "#1da1f2" }}
          rel="noreferrer"
        >
          #{d}
        </a>
      </p>
    </div>
  );
}

export default LiveDbHashtags;
