import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import ReactPlayer from 'react-player'

import { b, m } from './Device'

import ReactFlowPlayer from "react-flow-player";

const styles = {
  card: {

  },

};


// var humanizedGreeting = "Good " + getGreetingTime(moment()) + ", " + user + ".";

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card style={{ borderRadius: 0, marginTop: m ? 80 : 5 }}>
      <div style={{ background: '#121210' }}>
        <ReactFlowPlayer
          playerInitScript="https://releases.flowplayer.org/7.2.4/commercial/flowplayer.min.js"
          playerId="reactFlowPlayer"
          hlsPlugin={true}
          hlsUrl="https://releases.flowplayer.org/hlsjs/flowplayer.hlsjs.light.min.js"
          title=" "
          live={true}
          sources={[
            {
              type: "application/x-mpegurl",
              src: "http://bigjtv.livebox.co.in/bigjtvhls/live.m3u8"
            }
          ]}
        />
      </div>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);