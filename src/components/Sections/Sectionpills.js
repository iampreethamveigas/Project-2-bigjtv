import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Group";
import Schedule from "@material-ui/icons/Spa";
import List from "@material-ui/icons/WbSunny";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import NavPills from "../Navpills/NavPills"
// import pillsStyle from "../../assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import Prashanth from '../../assets/img/faces/prashanth.jpg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { b, m } from '../common/Device'


import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import vision from "../../assets/img/vision.svg"


const pillsStyle = theme => ({
  section: {
    padding: "70px 0"
  },
  RootTop: {
    display: "flex",
    justifyContent: "center",
  },
  RootTops: { display: "flex" },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  title: {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  card: {
    display: 'flex',

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
  },
  content: {
    flex: '1 0 auto',
  },

  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  top: {
    backgroundImage: "url(" + Prashanth + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: m ? "500px" : "50%",
    height: m ? "500px" : "%",
    zIndex: 1,
    backgroundSize: "cover",

  }
});



class SectionPills extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h3>Our Organization</h3>
            </div>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} lg={8}>
                <NavPills
                  color="primary"
                  needdata={() => null}
                  tabs={[
                    {
                      tabButton: "About",
                      tabIcon: Dashboard,
                      tabContent: (
                        // <Card>
                        //   <CardMedia
                        //     image={Prashanth}
                        //     className={classes.cover}

                        //   />
                        //   <CardContent>
                        //     <p>
                        //       {/* <img src={Prashanth} style={{ width: "40%" }} /> */}
                        //       BIG-J MEDIA NETWORK IS A NON-PROFITABLE AND NON-COMMERCIAL CHRISTIAN TELEVISION CHANNEL DEDICATED TO TAKE THE MESSAGE OF THE MESSIAH TO THE MASS THROUGH MULTIMEDIA, IT IS ALSO AN INDEPENDENT AND INTER-DEPENDED CHRISTIAN ORGANIZATION REGISTERED AS A TRUST WITH THE GOVERNMENT OF INDIA, IT’S THE FIRST OF ITS KIND IN THE HISTORY OF WORLD IN KARNATAKA TO BE THE FIRST AND THE ONLY KANNADA CHANNEL STARTED BY AN KANNADIGA, IT STARTED WHEN FEW FRIENDS CAME TOGETHER WITH AN IDEA TO LAUNCH KANNADA CHRISTIAN CHANNEL, BUT DUE TO INSUFFICIENT FUND, SUPPORT AND ENCOURAGEMENTS FROM THE EXPECTED PEOPLE, THEY DROPPED THE IDEA OF STARTING THE CHANNEL; IT IS THEN MR. PRASHANTH JATHANNA WHO TOOK THE CHALLENGE BY FAITH, TRUSTING IN THE ALMIGHTY GOD, STARTED BIG-J MEDIA NETWORK IN THE YEAR OF 2008.
                        //   </p>
                        //   </CardContent>

                        // </Card>

                        <Card className={classes.card} style={{ flexWrap: m ? "wrap" : "nowrap" }}>
                          <Card
                            className={classes.top}
                          >
  
                          </Card>
                          <div className={classes.details}>

                            <CardContent className={classes.content}>


                              <Typography variant="body2" color="textPrimary">
                                BIG-J MEDIA NETWORK IS A NON-PROFITABLE AND NON-COMMERCIAL CHRISTIAN TELEVISION CHANNEL DEDICATED TO TAKE THE MESSAGE OF THE MESSIAH TO THE MASS THROUGH MULTIMEDIA, IT IS ALSO AN INDEPENDENT AND INTER-DEPENDED CHRISTIAN ORGANIZATION REGISTERED AS A TRUST WITH THE GOVERNMENT OF INDIA, IT’S THE FIRST OF ITS KIND IN THE HISTORY OF WORLD IN KARNATAKA TO BE THE FIRST AND THE ONLY KANNADA CHANNEL STARTED BY AN KANNADIGA, IT STARTED WHEN FEW FRIENDS CAME TOGETHER WITH AN IDEA TO LAUNCH KANNADA CHRISTIAN CHANNEL, BUT DUE TO INSUFFICIENT FUND, SUPPORT AND ENCOURAGEMENTS FROM THE EXPECTED PEOPLE, THEY DROPPED THE IDEA OF STARTING THE CHANNEL; IT IS THEN MR. PRASHANTH JATHANNA WHO TOOK THE CHALLENGE BY FAITH, TRUSTING IN THE ALMIGHTY GOD, STARTED BIG-J MEDIA NETWORK IN THE YEAR OF 2008.
                              </Typography>
                            </CardContent>
                          </div>

                        </Card>

                      )
                    },
                    {
                      tabButton: "Mission",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>
                            BIG-J MEDIA NETWORK IS A NON-PROFITABLE AND NON-COMMERCIAL CHRISTIAN TELEVISION CHANNEL DEDICATED TO TAKE THE MESSAGE OF THE MESSIAH TO THE MASS THROUGH MULTIMEDIA, IT IS ALSO AN INDEPENDENT AND INTER-DEPENDED CHRISTIAN ORGANIZATION REGISTERED AS A TRUST WITH THE GOVERNMENT OF INDIA.
                          </p>
                          <br />

                        </span>
                      )
                    },
                    {
                      tabButton: "Vision",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          <p>
                            THE MAIN MOTIVE OF THIS MEDIA MINISTRY IS TO SPREAD THE LOVE OF GOD, TO REACH THE MILLIONS THROUGH THE GOSPEL OF THE LORD JESUS CHRIST, TO BRING AN AWARENESS AND IMPACT LIVES, SPIRITUALLY AND SOCIALLY THROUGHOUT KARNATAKA, ALL OVER INDIA AND TO THE ENDS OF THE WORLD. IT BEGAN IN A MODEST WAY WITH JUST FEW THOUSANDS VIEWERS IN UDUPI, BUT TODAY BY THE GRACE AND STRENGTH OF GOD BIG-J TV HAS GROWN TO A MAMMOTH PROPORTION REACHING MILLIONS OF VIEWERS ACROSS UDUPI, DAKSHINA KANNADA AND UTTARA KANNADA, HUBLI, GADAG, PUNE AND MUMBAI. THE PROGRAMS ARE TELECASTED IN LANGUAGES LIKE KANNADA, ENGLISH, KONKANI, TULU, TAMIL, HINDI AND MALAYALAM. BIG J MEDIA NETWORK HAS BEEN ACCEPTED BY THE PEOPLE OF KARNATAKA AND MAHARASHTRA CUTTING ACROSS DENOMINATIONS AND DOCTRINES. IT IS THE UNIQUE CHRISTIAN CHANNEL WHICH AIRS 24X7, SATISFYING THE SOULS OF HUMAN BEING, AND MEETING THE SPIRITUAL NEEDS OF THE VIEWERS OF ALL AGES.
                          </p>
                          <br />

                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
