import React, { useState, useEffect } from "react";
import "@material-ui/core";
import { ListItem } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css";
import logo from "./logo.png";
// import map from "./map.png";
import Carousel from "react-elastic-carousel";

// home_graphs
import CountTotalByYear from "./home_graphs/CountTotalByYear";
import AverageTweetLength from "./home_graphs/AverageTweetLength";
import AverageReply from "./home_graphs/AverageReply";
import Averagelikestweet from "./home_graphs/Averagelikestweet";
import Mediausagetweets from "./home_graphs/Mediausagetweets";
import AverageRetweets from "./home_graphs/AverageRetweets";
import TotalReplies from "./home_graphs/TotalReplies";

// individual graphs
import Tweets from "./individual_graphs/Tweets";

import MostUsedHashtags from "./individual_graphs/MostUsedHashtags";
import MostTweetsDay from "./individual_graphs/MostTweetsDay";
import MostTweetsTime from "./individual_graphs/MostTweetsTime";
import MostActiveUser from "./individual_graphs/MostActiveUser";
import MostUsedUrls from "./individual_graphs/MostUsedUrls";
import CountTotalByMonth_individual from "./individual_graphs/CountTotalByMonth_individual";
import AverageReply_individual from "./individual_graphs/AverageReply_individual";
import AverageLikesTweets_individual from "./individual_graphs/AverageLikesTweets_individual";
import MedienausageTweets_individual from "./individual_graphs/MedienausageTweets_individual";
import AverageTweetLength_individual from "./individual_graphs/AverageTweetLength_individual";
import AverageRetweets_individual from "./individual_graphs/AverageRetweets_individual";
import TotalReplies_individual from "./individual_graphs/TotalReplies_individual";
import LiveMediaUsage from "./individual_graphs_live/LiveMediaUsage";
import LiveSentiment from "./individual_graphs_live/LiveSentiment";
import LiveCountTotalTweets from "./individual_graphs_live/LiveCountTotalTweets";
//import WordCloud from "./individual_graphs/WordCloud";
import TweetEmbed from "react-tweet-embed";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_left">
          <a href="/">
            {" "}
            <img src={logo} style={{ display: "flex", width: "100%" }}></img>
          </a>

          <div className="nevigation">
            <ListItem component={Link} to="/HOME">
              <ListItem button>HOME</ListItem>
            </ListItem>
            <ListItem component={Link} to="/CDU">
              <ListItem button>CDU</ListItem>
            </ListItem>
            <ListItem component={Link} to="/SPD">
              <ListItem button>SPD</ListItem>
            </ListItem>
            <ListItem component={Link} to="/FDP">
              <ListItem button>FDP</ListItem>
            </ListItem>
            <ListItem component={Link} to="/AFD">
              <ListItem button>AFD</ListItem>
            </ListItem>
            <ListItem component={Link} to="/LINKE">
              <ListItem button>LINKE</ListItem>
            </ListItem>
            <ListItem component={Link} to="/GRÜNE">
              <ListItem button>GRÜNE</ListItem>
            </ListItem>
            <ListItem component={Link} to="/CSU">
              <ListItem button>CSU</ListItem>
            </ListItem>
            <ListItem component={Link} to="/Parteilos">
              <ListItem button>PARTEILOS</ListItem>
            </ListItem>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to="/HOME" />
          </Route>
          <Route path="/HOME">
            <Home />
          </Route>
          <Route path="/CDU">
            <CDU />
          </Route>
          <Route path="/SPD">
            <SPD />
          </Route>
          <Route path="/AFD">
            <AFD />
          </Route>
          <Route path="/FDP">
            <FDP />
          </Route>
          <Route path="/LINKE">
            <LINKE />
          </Route>
          <Route path="/GRÜNE">
            <GRÜNE />
          </Route>
          <Route path="/CSU">
            <CSU />
          </Route>
          <Route path="/Parteilos">
            <Parteilos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

let parties = {
  AfD: [0, "AfD", "rgba(53, 185, 255,", "0.75)"],
  B90: [1, "B90", "rgba(0, 255, 0,", "0.75)"],
  CDU: [2, "CDU", "rgba(0, 0, 0,", "0.75)"],
  CSU: [3, "CSU", "rgba(53, 61, 255,", "0.75)"],
  FDP: [4, "FDP", "rgba(255, 255, 0,", "0.75)"],
  Linke: [5, "Linke", "rgba(255, 0, 175,", "0.75)"],
  Parteilos: [6, "Parteilos", "rgba(125, 125, 125,", "0.75)"],
  SPD: [7, "SPD", "rgba(255, 0, 0,", "0.75)"],
};
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function buildList(data) {
  var list = [];
  console.log(data);
  for (var i in data) {
    list.push(data[i]);
  }
  console.log(list);
  return list;
}
function Home() {
  const [d, setD] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var newList = buildList(Object.values(data)[0]);
          setD(newList);
          //setLoading(false); //stop loading when data is fetched
        });
    };
    fetchData();
  }, []);

  return (
    <div className="home_right">
      <div className="home_tweets">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
      <div className="home_charts">
        <CountTotalByYear parties={parties} />
        <TotalReplies parties={parties} />

        <AverageReply parties={parties} />
        <AverageRetweets parties={parties} />
        <Averagelikestweet parties={parties} />
        <AverageTweetLength parties={parties} />

        <Mediausagetweets parties={parties} />
      </div>

      {/* <MostUsedHashtags /> */}
    </div>
  );
}
function CDU() {
  return (
    <div className="app_right">
      <div className="left">
        <Tweets party={parties.CDU} />
      </div>
      <div className="right">
        <LiveMediaUsage party={parties.CDU} />
        <LiveSentiment party={parties.CDU} />
        <LiveCountTotalTweets party={parties.CDU} />

        <CountTotalByMonth_individual party={parties.CDU} />
        <TotalReplies_individual party={parties.CDU} />
        <MedienausageTweets_individual party={parties.CDU} />

        <AverageReply_individual party={parties.CDU} />
        <AverageLikesTweets_individual party={parties.CDU} />
        <AverageTweetLength_individual party={parties.CDU} />
        <AverageRetweets_individual party={parties.CDU} />

        <MostUsedHashtags party={parties.CDU} />
        <MostTweetsDay party={parties.CDU} />
        <MostTweetsTime party={parties.CDU} />
        <MostActiveUser party={parties.CDU} />
        <MostUsedUrls party={parties.CDU} />
      </div>
    </div>
  );
}
function SPD() {
  return (
    <div className="app_right">
      <div className="left">
        <Tweets party={parties.SPD} />
      </div>
      <div className="right">
        <LiveMediaUsage party={parties.SPD} />
        <LiveSentiment party={parties.SPD} />
        <LiveCountTotalTweets party={parties.SPD} />

        <CountTotalByMonth_individual party={parties.SPD} />
        <TotalReplies_individual party={parties.SPD} />
        <MedienausageTweets_individual party={parties.SPD} />

        <AverageReply_individual party={parties.SPD} />
        <AverageLikesTweets_individual party={parties.SPD} />
        <AverageTweetLength_individual party={parties.SPD} />
        <MedienausageTweets_individual party={parties.SPD} />

        <MostUsedHashtags party={parties.SPD} />
        <MostTweetsDay party={parties.SPD} />
        <MostTweetsTime party={parties.SPD} />
        <MostActiveUser party={parties.SPD} />
        <MostUsedUrls party={parties.SPD} />
      </div>
    </div>
  );
}
function AFD() {
  return (
    <div className="app_right">
      <div className="left">
        <Tweets party={parties.AfD} />
      </div>
      <div className="right">
        <LiveMediaUsage party={parties.AfD} />
        <LiveSentiment party={parties.AfD} />
        <LiveCountTotalTweets party={parties.AfD} />

        <CountTotalByMonth_individual party={parties.AfD} />
        <TotalReplies_individual party={parties.AfD} />
        <MedienausageTweets_individual party={parties.AfD} />

        <AverageReply_individual party={parties.AfD} />
        <AverageLikesTweets_individual party={parties.AfD} />
        <AverageTweetLength_individual party={parties.AfD} />
        <AverageRetweets_individual party={parties.AfD} />

        <MostUsedHashtags party={parties.AfD} />
        <MostTweetsDay party={parties.AfD} />
        <MostTweetsTime party={parties.AfD} />
        <MostActiveUser party={parties.AfD} />
        <MostUsedUrls party={parties.AfD} />
      </div>
    </div>
  );
}
function FDP() {
  return (
    <div className="app_right">
      <div className="left">
        <Tweets party={parties.FDP} />
      </div>
      <div className="right">
        <LiveMediaUsage party={parties.FDP} />
        <LiveSentiment party={parties.FDP} />
        <LiveCountTotalTweets party={parties.FDP} />

        <CountTotalByMonth_individual party={parties.FDP} />
        <TotalReplies_individual party={parties.FDP} />
        <MedienausageTweets_individual party={parties.FDP} />

        <AverageReply_individual party={parties.FDP} />
        <AverageLikesTweets_individual party={parties.FDP} />
        <AverageTweetLength_individual party={parties.FDP} />
        <AverageRetweets_individual party={parties.FDP} />

        <MostUsedHashtags party={parties.FDP} />
        <MostTweetsDay party={parties.FDP} />
        <MostTweetsTime party={parties.FDP} />
        <MostActiveUser party={parties.FDP} />
        <MostUsedUrls party={parties.FDP} />
      </div>
    </div>
  );
}
function LINKE() {
  return (
    <div className="app_right">
      <div className="left">
        <Tweets party={parties.Linke} />
      </div>
      <div className="right">
        <LiveMediaUsage party={parties.Linke} />
        <LiveSentiment party={parties.Linke} />
        <LiveCountTotalTweets party={parties.Linke} />

        <CountTotalByMonth_individual party={parties.Linke} />
        <TotalReplies_individual party={parties.Linke} />
        <MedienausageTweets_individual party={parties.Linke} />

        <AverageReply_individual party={parties.Linke} />
        <AverageLikesTweets_individual party={parties.Linke} />
        <AverageTweetLength_individual party={parties.CDU} />
        <AverageRetweets_individual party={parties.Linke} />

        <MostUsedHashtags party={parties.Linke} />
        <MostTweetsDay party={parties.Linke} />
        <MostTweetsTime party={parties.Linke} />
        <MostActiveUser party={parties.Linke} />
        <MostUsedUrls party={parties.Linke} />
      </div>
    </div>
  );
}
function GRÜNE() {
  return (
    <div className="app_right">
      <div className="left">
        <Tweets party={parties.B90} />
      </div>
      <div className="right">
        <LiveMediaUsage party={parties.B90} />
        <LiveSentiment party={parties.B90} />
        <LiveCountTotalTweets party={parties.B90} />

        <CountTotalByMonth_individual party={parties.B90} />
        <TotalReplies_individual party={parties.B90} />
        <MedienausageTweets_individual party={parties.B90} />

        <AverageReply_individual party={parties.B90} />
        <AverageLikesTweets_individual party={parties.B90} />
        <AverageTweetLength_individual party={parties.B90} />
        <AverageRetweets_individual party={parties.B90} />

        <MostUsedHashtags party={parties.B90} />
        <MostTweetsDay party={parties.B90} />
        <MostTweetsTime party={parties.B90} />
        <MostActiveUser party={parties.B90} />
        <MostUsedUrls party={parties.B90} />
      </div>
    </div>
  );
}
function CSU() {
  return (
    <div className="app_right">
      <div className="left">
        <Tweets party={parties.CSU} />
      </div>
      <div className="right">
        <LiveMediaUsage party={parties.CSU} />
        <LiveSentiment party={parties.CSU} />
        <LiveCountTotalTweets party={parties.CSU} />

        <CountTotalByMonth_individual party={parties.CSU} />
        <TotalReplies_individual party={parties.CSU} />
        <MedienausageTweets_individual party={parties.CSU} />

        <AverageReply_individual party={parties.CSU} />
        <AverageLikesTweets_individual party={parties.CSU} />
        <AverageTweetLength_individual party={parties.CSU} />
        <AverageRetweets_individual party={parties.CSU} />

        <MostUsedHashtags party={parties.CSU} />
        <MostTweetsDay party={parties.CSU} />
        <MostTweetsTime party={parties.CSU} />
        <MostActiveUser party={parties.CSU} />
        <MostUsedUrls party={parties.CSU} />
      </div>
    </div>
  );
}
function Parteilos() {
  return (
    <div className="app_right">
      <div className="left">
        <Tweets party={parties.Parteilos} />
      </div>
      <div className="right">
        <LiveMediaUsage party={parties.Parteilos} />
        <LiveSentiment party={parties.Parteilos} />
        <LiveCountTotalTweets party={parties.Parteilos} />

        <CountTotalByMonth_individual party={parties.Parteilos} />
        <TotalReplies_individual party={parties.Parteilos} />
        <MedienausageTweets_individual party={parties.Parteilos} />

        <AverageReply_individual party={parties.Parteilos} />
        <AverageLikesTweets_individual party={parties.Parteilos} />
        <AverageTweetLength_individual party={parties.Parteilos} />
        <AverageRetweets_individual party={parties.Parteilos} />

        <MostUsedHashtags party={parties.Parteilos} />
        <MostTweetsDay party={parties.Parteilos} />
        <MostTweetsTime party={parties.Parteilos} />
        <MostActiveUser party={parties.Parteilos} />
        <MostUsedUrls party={parties.Parteilos} />
      </div>
    </div>
  );
}

export default App;
