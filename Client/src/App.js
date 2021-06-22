import React, { Component } from "react";
import "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
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
import CountTotalByMounth_individual from "./individual_graphs/CountTotalByMounth_individual";
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
            <ListItem component={Link} to="/GRÜN">
              <ListItem button>GRÜN</ListItem>
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
          <Route path="/GRÜN">
            <GRÜN />
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
      <MostUsedHashtags />
      <MostTweetsDay />
      <MostTweetsTime />
      <MostActiveUser />
      <CountTotalByMounth_individual party={"cdu"} />
      <AverageReply_individual party={"cdu"} />
      <AverageLikesTweets_individual party={"cdu"} />
      <MedienausageTweets_individual party={"cdu"} />
      <AverageTweetLength_individual party={"cdu"} />
    </div>
  );
}
function SPD() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMounth_individual party={"spd"} />
      <AverageReply_individual party={"spd"} />
      <AverageLikesTweets_individual party={"spd"} />
      <MedienausageTweets_individual party={"spd"} />
      <AverageTweetLength_individual party={"spd"} />
    </div>
  );
}
function AFD() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <MedienausageTweets_individual party={"afd"} />
      <CountTotalByMounth_individual party={"afd"} />
      <AverageReply_individual party={"afd"} />
      <AverageLikesTweets_individual party={"afd"} />
      <AverageTweetLength_individual party={"afd"} />
    </div>
  );
}
function FDP() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <MedienausageTweets_individual party={"fdp"} />
      <CountTotalByMounth_individual party={"fdp"} />
      <AverageReply_individual party={"fdp"} />
      <AverageLikesTweets_individual party={"fdp"} />
      <AverageTweetLength_individual party={"fdp"} />
    </div>
  );
}
function LINKE() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMounth_individual party={"linke"} />
      <AverageReply_individual party={"linke"} />
      <AverageLikesTweets_individual party={"linke"} />
      <MedienausageTweets_individual party={"linke"} />
      <AverageTweetLength_individual party={"linke"} />
    </div>
  );
}
function GRÜN() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMounth_individual party={"gruen"} />
      <AverageReply_individual party={"gruen"} />
      <AverageLikesTweets_individual party={"gruen"} />
      <MedienausageTweets_individual party={"gruen"} />
      <AverageTweetLength_individual party={"gruen"} />
    </div>
  );
}
function CSU() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMounth_individual party={"csu"} />
      <AverageReply_individual party={"csu"} />
      <AverageLikesTweets_individual party={"csu"} />
      <MedienausageTweets_individual party={"csu"} />
      <AverageTweetLength_individual party={"csu"} />
    </div>
  );
}
function Parteilos() {
  return (
    <div className="app_right">
      {/* <Tweets /> */}
      <CountTotalByMounth_individual party={"parteilos"} />
      <AverageReply_individual party={"parteilos"} />
      <AverageLikesTweets_individual party={"parteilos"} />
      <MedienausageTweets_individual party={"parteilos"} />
      <AverageTweetLength_individual party={"parteilos"} />
    </div>
  );
}

export default App;
