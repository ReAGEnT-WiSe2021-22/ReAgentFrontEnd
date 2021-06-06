import React, { useState, useEffect } from "react";
import TweetEmbed from "react-tweet-embed";

function Tweets({ party }) {
  //const [id, setID] = useState(0);
  const [cdu, setCDU] = useState(0);
  const [spd, setSPD] = useState(0);
  const [fdp, setFDP] = useState(0);
  const [afd, setAFD] = useState(0);
  const [linke, setLinke] = useState(0);
  const [gruen, setGruen] = useState(0);
  const [csu, setCSU] = useState(0);
  const [parteilos, setParteilos] = useState(0);
  var cduData = [];
  useEffect(() => {
    const fetchData = async () => {
      await fetch("")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for (let d in data) {
            if (data[d].party == "cdu") {
              cduData.push(data[d].id);
            }
          }
          setCDU(cduData);
        });
    };
    fetchData();
  }, [party]);

  if (party == "cdu") {
    return (
      // map through cdu and create tweets for each if
      <div>
        <TweetEmbed id={cdu} />
      </div>
    );
  }
  return (
    <div>
      <TweetEmbed id="1391326610691956736" />
      <TweetEmbed id="1391326642056962049" />
      <TweetEmbed id="1391326634452606976" />
    </div>
  );
}
export default Tweets;
