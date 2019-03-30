import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Button from '../CustomButtons/Button'
import Favorite from "@material-ui/icons/Favorite";

import HeaderTitle from '../common/HeaderTitle'
import { b, m } from '../common/Device'
import image from "../../assets/img/worship.jpeg"
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
import { Typography } from "@material-ui/core";
import axios from 'axios'
import CustomInput from "../CustomInput/CustomInput";


const dashboardRoutes = [];

const styles = theme => ({
    card: {
        display: 'flex',
        height: 500,
        backgroundImage: "url(" + image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
        margin: m ? "-37px 20px" : "-14px 60px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.28), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    top: {
        backgroundPosition: "top center",
        width: "100%",
        height: 800,
        zIndex: 1,
        marginTop: -400,
    },
    givebutton: {
        margin: theme.spacing.unit,
        padding: 30,
        border: "1px solid rgba(33, 150, 243, 0.5)",
        color: '#2196f3'

    },
    margin: {
        margin: theme.spacing.unit,
        borderRadius: 4,
        backgroundColor: "#2196F3",

    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },

});


class Give extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Contribution: ''
        }
    }
    changeContribution = p => {
        if (!p.target.value) {
            this.setState({ Contribution: p.currentTarget.value })

        }
        else {
            this.setState({ Contribution: p.target.value })
        }

    }
    // "TXN_AMOUNT": this.state.Contribution,
    // "ORDER_ID": "20180801",
    // "CUST_ID": "P2018",
    // "INDUSTRY_TYPE_ID": "Retail109",
    // "CHANNEL_ID": "WEB"
    becomePatner = p => {
        axios.post(`http://bigjtv.org/paytm/pgRedirect.php`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            crossorigin: true,
        })
            .then(res => {
                console.log(res)
            })

    }
    render() {
        const { Contribution } = this.state
        const { classes, ...rest } = this.props;
        console.log(Contribution)
        return (
            <div>
                {/* <div className={classes.top}></div> */}
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <Card className={classes.card}>
                            <Card className={classes.mainRaised} style={{ margin: 15 }}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Give to the Kingdom
                                             </Typography>
                                        <Typography variant="overline" color="secondary">
                                            Become A PARTNER  with BiG J Tv.
                                             </Typography>
                                        <div style={{ display: "flex", flexWrap: "wrap", }}>
                                            <Button variant="outlined" color="primary" className={classes.givebutton} onClick={this.changeContribution} value={500} >
                                                <Typography variant="title" color="textPrimary" style={{ color: '#fff' }}>
                                                    <span>&#8377;</span> 500
                                             </Typography>

                                            </Button>
                                            <Button variant="outlined" color="primary" className={classes.givebutton} onClick={this.changeContribution} value={1000}>

                                                <Typography variant="title" color="textPrimary" style={{ color: '#fff' }}>
                                                    <span>&#8377;</span> 1000
                                             </Typography>
                                            </Button>
                                            <Button variant="outlined" color="primary" className={classes.givebutton} onClick={this.changeContribution} value={2000}>
                                                <Typography variant="title" color="textPrimary" style={{ color: '#fff' }}>
                                                    <span>&#8377;</span> 2000
                                             </Typography>
                                            </Button>
                                            <Button variant="outlined" color="primary" className={classes.givebutton} onClick={this.changeContribution} value={3000}>
                                                <Typography variant="title" color="textPrimary" style={{ color: '#fff' }}>
                                                    <span>&#8377;</span>3000
                                             </Typography>
                                            </Button>
                                            <Button variant="outlined" color="primary" className={classes.givebutton} onClick={this.changeContribution} value={5000}>
                                                <Typography variant="title" color="textPrimary" style={{ color: '#fff' }}>
                                                    <span>&#8377;</span>  5000
                                             </Typography>
                                            </Button>
                                            <Button variant="outlined" color="primary" className={classes.givebutton} onClick={this.changeContribution} value={10000}>
                                                <Typography variant="title" color="textPrimary" style={{ color: '#fff' }}>
                                                    <span>&#8377;</span>  10000
                                             </Typography>
                                            </Button>
                                            <div style={{ width: "100%" }}>
                                                <Typography variant="subheading" color="textSecondary">
                                                    or
                                             </Typography>
                                            </div>
                                            <Button variant="outlined" color="primary" className={classes.givebutton}>
                                                <CustomInput
                                                    labelText="Or Enter Rs.. "
                                                    id="givecustom"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "number",

                                                    }}
                                                />
                                            </Button>
                                            <Button title="Your Contribution is" variant="outlined" color="primary" className={classes.givebutton}>
                                                <Typography variant="title" color="textPrimary" style={{ color: '#fff' }}>
                                                    Your Contribution is:    <span>&#8377;</span>  {"__" + Contribution + "/-"}
                                                </Typography>
                                            </Button>

                                        </div>
                                        <Fab
                                            variant="extended" color="primary" aria-label="Donate" className={classes.margin}
                                            style={{ width: '100%' }}
                                            onClick={this.becomePatner}
                                        >
                                            <Favorite className={classes.extendedIcon} />
                                            Become A Patner
                                        </Fab>
                                    </CardContent>

                                </div>
                            </Card>

                        </Card>

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Give);
