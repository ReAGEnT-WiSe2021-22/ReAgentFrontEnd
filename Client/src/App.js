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
import CountTotalByYear from "./home_graphs/CountTotalByYear";
import AverageTweetLength from "./home_graphs/AverageTweetLength";
import CDUGraphs from "./cdu_graphs/AverageTweetLength";
import AverageReply from "./home_graphs/AverageReply";
import Averagelikestweet from "./home_graphs/Averagelikestweet";
import Mediausagetweets from "./home_graphs/Mediausagetweets";
import MostUsedHashtags from "./cdu_graphs/MostUsedHashtags";
//import MostUsedHashtagsCloud from "./home_graphs/MostUsedHashtagsCloud";
import MostTweetsDay from "./cdu_graphs/MostTweetsDay";
import MostTweetsTime from "./cdu_graphs/MostTweetsTime";
import MostActiveUser from "./cdu_graphs/MostActiveUser";

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
      <CDUGraphs />
      {/* <Tweets party={"cdu"} /> */}
      <MostUsedHashtags />
      <MostTweetsDay />
      <MostTweetsTime />
      <MostActiveUser />
    </div>
  );
}
function SPD() {
  return <div className="app_right">{/* <Tweets /> */}</div>;
}
function AFD() {
  return <div className="app_right">{/* <Tweets /> */}</div>;
}
function FDP() {
  return <div className="app_right">{/* <Tweets /> */}</div>;
}
function LINKE() {
  return <div className="app_right">{/* <Tweets /> */}</div>;
}
function GRÜN() {
  return <div className="app_right">{/* <Tweets /> */}</div>;
}

export default App;
