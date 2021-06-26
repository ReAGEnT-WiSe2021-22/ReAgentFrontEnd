/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import "@material-ui/core";
import { ListItem } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "./App.css";
import logo from "./logo.png";
import map from "./map.png";
import Tweets from "./Tweets";
// home_graphs
import CountTotalByYear from "./home_graphs/CountTotalByYear";
import AverageTweetLength from "./home_graphs/AverageTweetLength";
import AverageReply from "./home_graphs/AverageReply";
import Averagelikestweet from "./home_graphs/Averagelikestweet";
import Mediausagetweets from "./home_graphs/Mediausagetweets";
// individual graphs
import MostUsedHashtags from "./individual_graphs/MostUsedHashtags";
import MostTweetsDay from "./individual_graphs/MostTweetsDay";
import MostTweetsTime from "./individual_graphs/MostTweetsTime";
import MostActiveUser from "./individual_graphs/MostActiveUser";
import CountTotalByMonth_individual from "./individual_graphs/CountTotalByMonth_individual";
import AverageReply_individual from "./individual_graphs/AverageReply_individual";
import AverageLikesTweets_individual from "./individual_graphs/AverageLikesTweets_individual";
import MedienausageTweets_individual from "./individual_graphs/MedienausageTweets_individual";
import AverageTweetLength_individual from "./individual_graphs/AverageTweetLength_individual";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_left">
          <img src={logo} style={{ display: "flex", width: "100%" }}></img>
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
  AfD: { 0: "AfD" },
  B90: { 1: "B90" },
  CDU: { 2: "CDU" },
  CSU: { 3: "CSU" },
  FDP: { 4: "FDP" },
  Linke: { 5: "Linke" },
  Parteilos: { 6: "Parteilos" },
  SPD: { 7: "SPD" },
};

function Home() {
  //<AverageTweetLength />

  return (
    <div className="app_right">
      <CountTotalByYear />
      <AverageReply />
      <Averagelikestweet />
      <Mediausagetweets />
      {/* <MostUsedHashtags /> */}
    </div>
  );
}
function CDU() {
  return (
    <div className="app_right">
      {/* <Tweets party={"cdu"} /> */}
      <CountTotalByMonth_individual party={parties.CDU} />
      <AverageReply_individual party={parties.CDU} />
      <AverageLikesTweets_individual party={parties.CDU} />
      <MedienausageTweets_individual party={parties.CDU} />
      <AverageTweetLength_individual party={parties.CDU} />

      <MostUsedHashtags party={parties.CDU} />
      <MostTweetsDay party={parties.CDU} />
      <MostTweetsTime party={parties.CDU} />
      <MostActiveUser party={parties.CDU} />
    </div>
  );
}
function SPD() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMonth_individual party={parties.SPD} />
      <AverageReply_individual party={parties.SPD} />
      <AverageLikesTweets_individual party={parties.SPD} />
      <MedienausageTweets_individual party={parties.SPD} />
      <AverageTweetLength_individual party={parties.SPD} />

      <MostUsedHashtags party={parties.SPD} />
      <MostTweetsDay party={parties.SPD} />
      <MostTweetsTime party={parties.SPD} />
      <MostActiveUser party={parties.SPD} />
    </div>
  );
}
function AFD() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMonth_individual party={parties.AfD} />
      <AverageReply_individual party={parties.AfD} />
      <AverageLikesTweets_individual party={parties.AfD} />
      <MedienausageTweets_individual party={parties.AfD} />
      <AverageTweetLength_individual party={parties.AfD} />

      <MostUsedHashtags party={parties.AfD} />
      <MostTweetsDay party={parties.AfD} />
      <MostTweetsTime party={parties.AfD} />
      <MostActiveUser party={parties.AfD} />
    </div>
  );
}
function FDP() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMonth_individual party={parties.FDP} />
      <AverageReply_individual party={parties.FDP} />
      <AverageLikesTweets_individual party={parties.FDP} />
      <MedienausageTweets_individual party={parties.FDP} />
      <AverageTweetLength_individual party={parties.FDP} />

      <MostUsedHashtags party={parties.FDP} />
      <MostTweetsDay party={parties.FDP} />
      <MostTweetsTime party={parties.FDP} />
      <MostActiveUser party={parties.FDP} />
    </div>
  );
}
function LINKE() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMonth_individual party={parties.Linke} />
      <AverageReply_individual party={parties.Linke} />
      <AverageLikesTweets_individual party={parties.Linke} />
      <MedienausageTweets_individual party={parties.Linke} />
      <AverageTweetLength_individual party={parties.CDU} />

      <MostUsedHashtags party={parties.Linke} />
      <MostTweetsDay party={parties.Linke} />
      <MostTweetsTime party={parties.Linke} />
      <MostActiveUser party={parties.Linke} />
    </div>
  );
}
function GRÜNE() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMonth_individual party={parties.B90} />
      <AverageReply_individual party={parties.B90} />
      <AverageLikesTweets_individual party={parties.B90} />
      <MedienausageTweets_individual party={parties.B90} />
      <AverageTweetLength_individual party={parties.B90} />

      <MostUsedHashtags party={parties.B90} />
      <MostTweetsDay party={parties.B90} />
      <MostTweetsTime party={parties.B90} />
      <MostActiveUser party={parties.B90} />
    </div>
  );
}
function CSU() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMonth_individual party={parties.CSU} />
      <AverageReply_individual party={parties.CSU} />
      <AverageLikesTweets_individual party={parties.CSU} />
      <MedienausageTweets_individual party={parties.CSU} />
      <AverageTweetLength_individual party={parties.CSU} />

      <MostUsedHashtags party={parties.CSU} />
      <MostTweetsDay party={parties.CSU} />
      <MostTweetsTime party={parties.CSU} />
      <MostActiveUser party={parties.CSU} />
    </div>
  );
}
function Parteilos() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMonth_individual party={parties.Parteilos} />
      <AverageReply_individual party={parties.Parteilos} />
      <AverageLikesTweets_individual party={parties.Parteilos} />
      <MedienausageTweets_individual party={parties.Parteilos} />
      <AverageTweetLength_individual party={parties.Parteilos} />

      <MostUsedHashtags party={parties.Parteilos} />
      <MostTweetsDay party={parties.Parteilos} />
      <MostTweetsTime party={parties.Parteilos} />
      <MostActiveUser party={parties.Parteilos} />
    </div>
  );
}

export default App;
