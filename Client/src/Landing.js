import React from "react";
import map from "./map.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
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
import App from "./App";
function Landing() {
  return (
    <div>
      <div className="landing">
        <img src={map} style={{ display: "flex", width: "100%" }}></img>
        <Router>
          <ListItem component={Link} to="/App">
            <ListItem button>App</ListItem>
          </ListItem>

          <Switch>
            <Route exact path="/App">
              <App />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Landing;
