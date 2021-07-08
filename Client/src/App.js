import React, { useState, useEffect } from "react";
import "@material-ui/core";
import { ListItem, Typography, Box, Icon } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

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
import LiveDashboard from "./individual_graphs_live/Dashboard/LiveDashboard";

//import WordCloud from "./individual_graphs/WordCloud";
import TweetEmbed from "react-tweet-embed";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
}));

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

      {/* <MostUsedHashtags /> */}
    </div>
  );
}

function CDU() {
  const [d, setD] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/CDU")
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
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={900}>
            CDU
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties.CDU} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>

      <div className="right">
        <CountTotalByMonth_individual party={parties.CDU} />
        <AverageRetweets_individual party={parties.CDU} />
        <TotalReplies_individual party={parties.CDU} />

        <AverageReply_individual party={parties.CDU} />
        <AverageLikesTweets_individual party={parties.CDU} />
        <AverageTweetLength_individual party={parties.CDU} />
        <MedienausageTweets_individual party={parties.CDU} />

        <MostUsedHashtags party={parties.CDU} />
        <MostTweetsDay party={parties.CDU} />
        <MostTweetsTime party={parties.CDU} />
        <MostActiveUser party={parties.CDU} />
        <MostUsedUrls party={parties.CDU} />
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function SPD() {
  const [d, setD] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/SPD")
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
  /**<LiveMediaUsage party={parties.SPD} />
        <LiveSentiment party={parties.SPD} />
        <LiveCountTotalTweets party={parties.SPD} /> 
        
        <div className="left">
        <Tweets party={parties.SPD} />
      </div>*/
  return (
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={700}>
            SPD
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties.SPD} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>
      <div className="right">
        <CountTotalByMonth_individual party={parties.SPD} />
        <AverageRetweets_individual party={parties.SPD} />
        <TotalReplies_individual party={parties.SPD} />

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
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function AFD() {
  const [d, setD] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/AfD")
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
  /**<LiveMediaUsage party={parties.AfD} />
        <LiveSentiment party={parties.AfD} />
        <LiveCountTotalTweets party={parties.AfD} /> */
  return (
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={700}>
            SPD
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties.AfD} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>
      <div className="right">
        <CountTotalByMonth_individual party={parties.AfD} />
        <AverageRetweets_individual party={parties.AfD} />
        <TotalReplies_individual party={parties.AfD} />

        <AverageReply_individual party={parties.AfD} />
        <AverageLikesTweets_individual party={parties.AfD} />
        <AverageTweetLength_individual party={parties.AfD} />
        <MedienausageTweets_individual party={parties.AfD} />

        <MostUsedHashtags party={parties.AfD} />
        <MostTweetsDay party={parties.AfD} />
        <MostTweetsTime party={parties.AfD} />
        <MostActiveUser party={parties.AfD} />
        <MostUsedUrls party={parties.AfD} />
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function FDP() {
  const [d, setD] = useState([0]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/FDP")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var newList = buildList(Object.values(data)[0]);
          setD(newList);
          setLoading(false); //stop loading when data is fetched
        });
    };
    fetchData();
  }, []);
  /**<LiveMediaUsage party={parties.FDP} />
        <LiveSentiment party={parties.FDP} />
        <LiveCountTotalTweets party={parties.FDP} /> */
  return (
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={700}>
            FDP
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties.FDP} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>
      <div className="right">
        <CountTotalByMonth_individual party={parties.FDP} />
        <AverageRetweets_individual party={parties.FDP} />
        <TotalReplies_individual party={parties.FDP} />

        <AverageReply_individual party={parties.FDP} />
        <AverageLikesTweets_individual party={parties.FDP} />
        <AverageTweetLength_individual party={parties.FDP} />
        <MedienausageTweets_individual party={parties.FDP} />

        <MostUsedHashtags party={parties.FDP} />
        <MostTweetsDay party={parties.FDP} />
        <MostTweetsTime party={parties.FDP} />
        <MostActiveUser party={parties.FDP} />
        <MostUsedUrls party={parties.FDP} />
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function LINKE() {
  const [d, setD] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/Linke")
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
  /**<LiveMediaUsage party={parties.Linke} />
        <LiveSentiment party={parties.Linke} />
        <LiveCountTotalTweets party={parties.Linke} /> */
  return (
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={700}>
            Linke
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties.Linke} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>
      <div className="right">
        <CountTotalByMonth_individual party={parties.Linke} />
        <AverageRetweets_individual party={parties.Linke} />
        <TotalReplies_individual party={parties.Linke} />

        <AverageReply_individual party={parties.Linke} />
        <AverageLikesTweets_individual party={parties.Linke} />
        <AverageTweetLength_individual party={parties.Linke} />
        <MedienausageTweets_individual party={parties.Linke} />

        <MostUsedHashtags party={parties.Linke} />
        <MostTweetsDay party={parties.Linke} />
        <MostTweetsTime party={parties.Linke} />
        <MostActiveUser party={parties.Linke} />
        <MostUsedUrls party={parties.Linke} />
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function GRÜNE() {
  const [d, setD] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/B90")
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
  /** <LiveMediaUsage party={parties.B90} />
        <LiveSentiment party={parties.B90} />
        <LiveCountTotalTweets party={parties.B90} /> */
  return (
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={700}>
            Grüne
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties.B90} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>
      <div className="right">
        <CountTotalByMonth_individual party={parties.B90} />
        <AverageRetweets_individual party={parties.B90} />
        <TotalReplies_individual party={parties.B90} />

        <AverageReply_individual party={parties.B90} />
        <AverageLikesTweets_individual party={parties.B90} />
        <AverageTweetLength_individual party={parties.B90} />
        <MedienausageTweets_individual party={parties.B90} />

        <MostUsedHashtags party={parties.B90} />
        <MostTweetsDay party={parties.B90} />
        <MostTweetsTime party={parties.B90} />
        <MostActiveUser party={parties.B90} />
        <MostUsedUrls party={parties.B90} />
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function CSU() {
  const [d, setD] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/CSU")
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
  /**<LiveMediaUsage party={parties.CSU} />
        <LiveSentiment party={parties.CSU} />
        <LiveCountTotalTweets party={parties.CSU} /> */
  return (
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={700}>
            CSU
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties.CSU} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>
      <div className="right">
        <CountTotalByMonth_individual party={parties.CSU} />
        <AverageRetweets_individual party={parties.CSU} />
        <TotalReplies_individual party={parties.CSU} />

        <AverageReply_individual party={parties.CSU} />
        <AverageLikesTweets_individual party={parties.CSU} />
        <AverageTweetLength_individual party={parties.CSU} />
        <MedienausageTweets_individual party={parties.CSU} />

        <MostUsedHashtags party={parties.CSU} />
        <MostTweetsDay party={parties.CSU} />
        <MostTweetsTime party={parties.CSU} />
        <MostActiveUser party={parties.CSU} />
        <MostUsedUrls party={parties.CSU} />
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function Parteilos() {
  const [d, setD] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://reagent1.f4.htw-berlin.de:8080/liveTweets/Parteilos")
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
  /**<LiveMediaUsage party={parties.Parteilos} />
        <LiveSentiment party={parties.Parteilos} />
        <LiveCountTotalTweets party={parties.Parteilos} /> */
  return (
    <div className="app_right">
      <div style={{ paddingTop: "11px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          <Box letterSpacing={10} fontWeight={700}>
            Parteilos
          </Box>
        </Typography>
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Daten (24h)
      </Typography>
      <div className="topFullWidth">
        <LiveDashboard party={parties.Parteilos} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant="h6" align="left" gutterBottom>
          🔹 Historische Daten
        </Typography>
      </div>
      <div className="right">
        <CountTotalByMonth_individual party={parties.Parteilos} />
        <AverageRetweets_individual party={parties.Parteilos} />
        <TotalReplies_individual party={parties.Parteilos} />

        <AverageReply_individual party={parties.Parteilos} />
        <AverageLikesTweets_individual party={parties.Parteilos} />
        <AverageTweetLength_individual party={parties.Parteilos} />
        <MedienausageTweets_individual party={parties.Parteilos} />

        <MostUsedHashtags party={parties.Parteilos} />
        <MostTweetsDay party={parties.Parteilos} />
        <MostTweetsTime party={parties.Parteilos} />
        <MostActiveUser party={parties.Parteilos} />
        <MostUsedUrls party={parties.Parteilos} />
      </div>
      <Typography variant="h6" align="left" gutterBottom>
        🔹 Live Tweets
      </Typography>
      <div className="left">
        <Carousel breakPoints={breakPoints}>
          {d.map((ids) => (
            <TweetEmbed id={ids} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
