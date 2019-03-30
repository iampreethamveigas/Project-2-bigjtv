import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ResponsiveDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    const { open } = this.props;
    console.log(open)
    this.setState({ open });
  };
  componentDidMount() {
    const { open } = this.props;
    this.setState({ open });
  }
  componentWillUnmount() {
    this.setState({ open: false });
  }
  handleClose = () => {

  };

  render() {
    const { fullScreen, open, children,title } = this.props;
    // console.log(this.state,this.props)
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
             {children}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close} color="primary">
              Disagree
            </Button>
            <Button onClick={this.props.close} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);