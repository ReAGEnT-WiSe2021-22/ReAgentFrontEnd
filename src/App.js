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
import Twitts from "./Twitts";
import Charts from "./Charts";

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
  return (
    <div className="app_right">
      <Charts />
    </div>
  );
}
function CDU() {
  return (
    <div className="app_right">
      <Twitts />
    </div>
  );
}
function SPD() {
  return (
    <div className="app_right">
      <Twitts />
    </div>
  );
}
function AFD() {
  return (
    <div className="app_right">
      <Twitts />
    </div>
  );
}
function FDP() {
  return (
    <div className="app_right">
      <Twitts />
    </div>
  );
}
function LINKE() {
  return (
    <div className="app_right">
      <Twitts />
    </div>
  );
}
function GRÜN() {
  return (
    <div className="app_right">
      <Twitts />
    </div>
  );
}

export default App;
