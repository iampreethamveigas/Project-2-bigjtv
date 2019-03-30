import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
 

import workStyle from "../../assets/jss/material-kit-react/views/landingPageSections/workStyle";

class WorkSection extends React.Component {
  render() {
    const { classes, title, description, titlecolor, titleFont } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title} style={{color: titlecolor || '#fff', font:titleFont || 'inherit'}}>{title}</h2>
            <h4 className={classes.description}>
              {description}
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
