import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext'
import Sec from '../Sections/Sectionpills'
import Slide from '../Sections/SectionCarousel'
import Login from '../Contact/Contact'
import HeaderTitle from '../common/HeaderTitle'
import SliderContent from '../slides/SlideContainer'
import Give from '../Donation/Give'
import { b, m } from '../common/Device'

import image from "../../assets/img/landing-bg.jpg"
import vision from "../../assets/img/vision.svg"


const dashboardRoutes = [];

const styles = theme => ({
  card: {
    display: 'flex',
    height: 500,

  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "50%",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 20,
    color: "rgba(255, 255, 255, 0.71)",
    justifyContent: "space-around"

  },
  playIcon: {
    height: 38,
    width: 38,
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    marginTop: 150
  },
  mainRaised: {
    margin: m ? "-37px 20px" : "-28px 60px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.28), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  top: {
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: m ? "100%" : "50%",
    zIndex: 1,
  }
});


class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/* <div className={classes.top}></div> */}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Card className={classes.card} style={{ flexWrap: m ? "wrap" : "nowrap" }}>
              <Card
                className={classes.top}
              >
                <img src={vision} style={{ width: "80%" }} />

                <div className={classes.controls}>

                  <IconButton aria-label="Previous" style={{ color: "rgba(255, 255, 255, 0.71)" }}>
                    <SkipPreviousIcon />
                  </IconButton>
                  <IconButton aria-label="Play/pause" style={{ color: "rgba(255, 255, 255, 0.71)" }}>
                    <PlayArrowIcon className={classes.playIcon} />
                  </IconButton>
                  <IconButton aria-label="Next" style={{ color: "rgba(255, 255, 255, 0.71)" }}>
                    <SkipNextIcon />
                  </IconButton>
                </div>
              </Card>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Give />
                </CardContent>


              </div>

            </Card>
            <SliderContent />

            <Sec />
            <HeaderTitle title="The Word Was God." description="That which was from the beginning, which we have heard, which we have seen with our own eyes, which we have gazed upon and touched with our own hands--this is the Word of life 1 John 1:1." />
            <Slide />
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LandingPage);
