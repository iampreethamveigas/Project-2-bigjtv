import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Card from '@material-ui/core/Card';
import Sec from '../Sections/Sectionpills'
import Slide from '../Sections/SectionCarousel'
import Login from '../Contact/Contact'
import HeaderTitle from '../common/HeaderTitle'
import SliderContent from '../slides/SlideContainer'
import Give from '../Donation/Give'
import { b, m } from '../common/Device'
import { Typography } from "@material-ui/core";

import image from "../../assets/img/bg.jpg"
import vision from "../../assets/img/vision.png"
import vision2 from "../../assets/img/SVG/visiontag.svg"


const dashboardRoutes = []

const styles = theme => ({
  card: {
    display: 'flex',
    height: 250,
    // backgroundImage: "url(" + image + ")",
    background: "linear-gradient(160deg, #F44336, #9C27B0)",

    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition:'right'
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
    margin: m ? "-337px 20px" : "-338px 60px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.28), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  top: {
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "contain",
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
            <Card className={classes.card} style={{ flexWrap: m ? "wrap" : "nowrap", justifyContent:'center' }}>
              <picture>

                <img src={vision2} width="100%" height="100%" />

              </picture>

            </Card>
            <Give />
            {/* <SliderContent /> */}
            <Sec />
            {/* <HeaderTitle title="The Word Was God." description="That which was from the beginning, which we have heard, which we have seen with our own eyes, which we have gazed upon and touched with our own hands--this is the Word of life 1 John 1:1." /> */}
            {/* <Slide /> */}
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LandingPage);
