import React, { useState, useEffect } from "react";
import "@material-ui/core";
import { ListItem, Typography, Box } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css";
import logo from "./logo.png";
import Carousel from "react-elastic-carousel";

// home_graphs
import CountTotalByYear from "./home_graphs/CountTotalByYear";
import AverageTweetLength from "./home_graphs/AverageTweetLength";
import AverageReply from "./home_graphs/AverageReply";
import Averagelikestweet from "./home_graphs/Averagelikestweet";
import Mediausagetweets from "./home_graphs/Mediausagetweets";
import AverageRetweets from "./home_graphs/AverageRetweets";
import TotalReplies from "./home_graphs/TotalReplies";

import MostUsedHashtags from "./individual_graphs/MostUsedHashtags";
import MostTweetsDay from "./individual_graphs/MostTweetsDay";
import MostTweetsTime from "./individual_graphs/MostTweetsTime";
import MostActiveUser from "./individual_graphs/MostActiveUser";
import MostUsedUrls from "./individual_graphs/MostUsedUrls";
import CountTotalByMonthIndividual from "./individual_graphs/CountTotalByMonthIndividual";
import AverageReplyIndividual from "./individual_graphs/AverageReplyIndividual";
import AverageLikesTweetsIndividual from "./individual_graphs/AverageLikesTweetsIndividual";
import MedienausageTweetsIndividual from "./individual_graphs/MedienausageTweetsIndividual";
import AverageTweetLengthIndividual from "./individual_graphs/AverageTweetLengthIndividual";
import AverageRetweetsIndividual from "./individual_graphs/AverageRetweetsIndividual";
import TotalRepliesIndividual from "./individual_graphs/TotalRepliesIndividual";
import LiveDashboard from "./individual_graphs_live/Dashboard/LiveDashboard";

import TweetEmbed from "react-tweet-embed";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_left">
          <a href="/">
            {" "}
            <img
              alt="Logo der Hochschule für Technik und Wirtschaft Berlin"
              src={logo}
              style={{ display: "flex", width: "80%", padding: "20px" }}
            ></img>
          </a>

          <div className="nevigation">
            <ListItem component={Link} to="/HOME">
              <ListItem button>
                <HomeIcon />
                HOME
              </ListItem>
            </ListItem>
            <ListItem component={Link} to="/CDU">
              <ListItem button>CDU</ListItem>
            </ListItem>
            <ListItem component={Link} to="/SPD">
              <ListItem button>SPD</ListItem>
            </ListItem>
            <ListItem component={Link} to="/GRÜNE">
              <ListItem button>GRÜNE</ListItem>
            </ListItem>
            <ListItem component={Link} to="/FDP">
              <ListItem button>FDP</ListItem>
            </ListItem>
            <ListItem component={Link} to="/LINKE">
              <ListItem button>LINKE</ListItem>
            </ListItem>
            <ListItem component={Link} to="/CSU">
              <ListItem button>CSU</ListItem>
            </ListItem>
            <ListItem component={Link} to="/AFD">
              <ListItem button>AFD</ListItem>
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
            <PartyPage party="CDU" />
          </Route>
          <Route path="/SPD">
            <PartyPage party="SPD" />
          </Route>
          <Route path="/AFD">
            <PartyPage party="AfD" />
          </Route>
          <Route path="/FDP">
            <PartyPage party="FDP" />
          </Route>
          <Route path="/LINKE">
            <PartyPage party="Linke" />
          </Route>
          <Route path="/GRÜNE">
            <PartyPage party="B90" />
          </Route>
          <Route path="/CSU">
            <PartyPage party="CSU" />
          </Route>
          <Route path="/Parteilos">
            <PartyPage party="Parteilos" />
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
        });
    };
    fetchData();
  }, []);

  return (
    <div className="home_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={900}>
            HOME
          </Box>
        </Typography>
      </div>
      <div style={{ paddingTop: "15px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
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
      <div className="home_tweets">
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Live Tweets
        </Typography>
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function PartyPage({ party }) {
  const [partyData, setPartyData] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/" + party)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var newList = buildList(Object.values(data)[0]);
          setPartyData(newList);
        });
    };
    fetchData();
  }, [party]);

  return (
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={900}>
            {party}
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties[party]} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>

      <div className="right">
        <CountTotalByMonthIndividual party={parties[party]} />
        <AverageRetweetsIndividual party={parties[party]} />
        <TotalRepliesIndividual party={parties[party]} />

        <AverageReplyIndividual party={parties[party]} />
        <AverageLikesTweetsIndividual party={parties[party]} />
        <AverageTweetLengthIndividual party={parties[party]} />
        <MedienausageTweetsIndividual party={parties[party]} />

        <MostUsedHashtags party={parties[party]} />
        <MostTweetsDay party={parties[party]} />
        <MostTweetsTime party={parties[party]} />
        <MostActiveUser party={parties[party]} />
        <MostUsedUrls party={parties[party]} />
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {partyData.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
