import React from "react";
import "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
} from "@material-ui/core";

function Twitts() {
  return (
    <Card className="twitts">
      <CardHeader
        avatar={<Avatar>T</Avatar>}
        title="Name"
        subheader="@twitter account"
      />
      <CardContent>
        <Typography>..Twitt Content..</Typography>
        <Typography>ctreated Date</Typography>
      </CardContent>
    </Card>
  );
}
export default Twitts;
