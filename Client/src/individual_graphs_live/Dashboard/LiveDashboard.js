import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import LiveDbTweetCount from "./LiveDbTweetCount";
import LiveDbHashtags from "./LiveDbHashtags";
import LiveDbMostActive from "./LiveDbMostActive";
import LiveDbSentiment from "./LiveDbSentiment";

function LiveDashboard({ party }) {
  return (
    <div>
      <Card className="liveDashBoard">
        <LiveDbTweetCount party={party} />
        <LiveDbHashtags party={party} />
        <LiveDbMostActive party={party} />
        <LiveDbSentiment party={party} />
      </Card>
    </div>
  );
}

export default LiveDashboard;
