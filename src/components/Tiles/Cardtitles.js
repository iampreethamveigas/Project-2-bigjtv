import React from 'react'
import Proptypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/PlayArrow';
import AccessibilityNew from '@material-ui/icons/AccessibilityNew'
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'
import HeaderTitile from '../common/HeaderTitle'

import { b, m } from '../common/Device'
import NavPills from '../Navpills/NavPills';
import Card from '../Card/Card'
import CardBody from '../Card/CardBody'
import CardHeader from '../Card/CardHeader'
import CardFooter from '../Card/CardFooter'
import loginStyle from "../../assets/jss/material-kit-react/views/componentsSections/loginStyle";

import Image1 from '../../assets/img/faces/marc1.jpg'
import Image2 from '../../assets/img/faces/camp1.jpg'
import Jhony from '../../assets/img/faces/JohnnyLever.jpg'
import image from "../../assets/img/sign.jpg";



const width = window.innerWidth
const hwidth = ((width / 2) - 40)
const testdata = [];
testdata[0] = [
    {
        img: Jhony,
        title: 'Indian film actor',
        author: 'Mr Johnny Lever',
        desc: ' ‘ The biggest blessing that I have found is peace ’ Today I am a very successful person; there is no dearth for money. There are so many films on hand some of them I do not even accept. Now I am very relaxed even while working. I can now discern what I should and what I shouldn’t do. I have found peace.'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr R Manjunath',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr Francis Oliver',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image2,
        title: 'Business woman',
        author: 'Ms Saroja Margaret',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr Vincent Sequeira',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    }, {
        img: Image1,
        title: 'Pastor',
        author: 'Mr Suresh Poojary',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    }

];
testdata[1] = [
    {
        img: Image1,
        title: 'Indian film actor',
        author: 'Mr Johnny Lever',
        desc: ' ‘ The biggest blessing that I have found is peace ’ Today I am a very successful person; there is no dearth for money. There are so many films on hand some of them I do not even accept. Now I am very relaxed even while working. I can now discern what I should and what I shouldn’t do. I have found peace.'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr R Manjunath',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr Francis Oliver',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image2,
        title: 'Business woman',
        author: 'Ms Saroja Margaret',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr Vincent Sequeira',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    }, {
        img: Image1,
        title: 'Pastor',
        author: 'Mr Suresh Poojary',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    }

]

testdata[2] = [
    {
        img: Image1,
        title: 'Indian film actor',
        author: 'Mr Johnny Lever',
        desc: ' ‘ The biggest blessing that I have found is peace ’ Today I am a very successful person; there is no dearth for money. There are so many films on hand some of them I do not even accept. Now I am very relaxed even while working. I can now discern what I should and what I shouldn’t do. I have found peace.'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr R Manjunath',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr Francis Oliver',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image2,
        title: 'Business woman',
        author: 'Ms Saroja Margaret',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    },
    {
        img: Image1,
        title: 'Business Man',
        author: 'Mr Vincent Sequeira',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    }, {
        img: Image1,
        title: 'Pastor',
        author: 'Mr Suresh Poojary',
        desc: 'hey this is a compact description for the planned item where it will appear in the bottom side of the page'
    }

]

const styles = theme => ({

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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding: 15,
        margin: 'auto',
        minHeight: "110vh",
        maxHeight: "1600px",
        overflow: "hidden",
        padding: "70px 0",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        margin: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        backgroundImage: "url(" + image + ")"
    },
    gridList: {
        width: 500,
        height: 300,
        borderWidth: 5,
        borderColor: 'red',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    GridListTile: {
        width: b ? 260 : 260,
        height: 250,
    }
})

class TilebarGridList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }
    renderdata(i) {
        const { classes } = this.props;
        return testdata[i].map((t, i) => {
            return (
                <Card style={{ maxWidth: m ? hwidth : 300 }} key={i}>
                    {/* <img src={t.img} width={m ? 80 : 'inherit'} height={m ? 180 : 280} /> */}

                    <CardHeader color="primary" className={classes.cardHeader}
                        style={{
                            backgroundImage: "url(" + t.img + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            padding: m ? 0 : false, margin: m ? 0 : false,
                        }}>
                        <div style={{ padding: m ? 0 : false, margin: m ? 0 : false, }}>
                            <AccessibilityNew />
                            <h4>{t.author}</h4>
                            <p>{t.title}</p>
                        </div>
                    </CardHeader>
                    <CardHeader color="primary" className={classes.cardHeader}
                        style={{ padding: m ? 0 : false, margin: m ? 0 : false, }}
                    >
                        <div>
                            <h4>{t.author}</h4>
                            <p>{t.title}</p>
                        </div>
                        <IconButton aria-label="Play" onClick={() => alert("click")} style={{ borderWidth: 1, borderColor: 'red' }}>
                            <InfoIcon />
                        </IconButton>
                    </CardHeader>
                    <CardBody style={{ padding: 0 }}>
                    </CardBody>
                    <CardFooter className={classes.cardFooter} style={{ padding: m ? 0 : false, margin: m ? 0 : false, }}>
                        <h4>{t.desc}</h4>

                    </CardFooter>
                </Card>
            )
        })
    }

    pillindex = index => {
        this.setState({ index });
    }

    render() {
        const { classes, Subheader } = this.props;

        return (
            <div className={classes.root}>

                <GridContainer justify="center" style={{ margin: 0 }}>
                    <GridItem xs={12} sm={12} md={12}>
                        <NavPills
                            needdata={this.pillindex.bind(this)}
                            tabs={[
                                {
                                    tabButton: "Testimony",
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem xs={12} sm={12} md={12} lg={10} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                                {this.renderdata(0)}
                                            </GridItem>
                                        </GridContainer>),

                                },
                                {
                                    tabButton: "Songs",
                                    tabContent: (
                                        <GridContainer justify="center" style={{ marginRight: 13 }}>
                                            <GridItem xs={12} sm={12} md={12} lg={10} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                                {this.renderdata(1)}
                                            </GridItem>
                                        </GridContainer>

                                    )
                                },
                                {
                                    tabButton: "Seremons",
                                    tabContent: (
                                        <GridContainer justify="center" style={{ marginRight: 13 }}>
                                            <GridItem xs={12} sm={12} md={12} lg={10} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                                {this.renderdata(2)}
                                            </GridItem>
                                        </GridContainer>

                                    )
                                },


                            ]}
                        >
                        </NavPills>
                    </GridItem>
                </GridContainer>
            </div>

        )
    }
}
TilebarGridList.proptypes = {
    classes: Proptypes.object.isRequired,
}

export default withStyles(loginStyle)(TilebarGridList)