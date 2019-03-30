/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownloa0, FavoriteBorder } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle";

function LeftLinks({ ...props }) {
    const { classes } = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    href="https://www.creative-tim.com/product/material-kit-react"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <FavoriteBorder className={classes.icons} /> Mission
        </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="https://www.creative-tim.com/product/material-kit-react"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <FavoriteBorder className={classes.icons} /> About
        </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="https://www.creative-tim.com/product/material-kit-react"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <FavoriteBorder className={classes.icons} /> Donate
        </Button>
            </ListItem>

        </List>
    );
}

export default withStyles(headerLinksStyle)(LeftLinks);
