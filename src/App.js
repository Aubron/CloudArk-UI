import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import logo from './logo.svg';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import IconButton from 'material-ui/IconButton';
import Github from './components/Github';
const styles = {
  root: {
    width: '100%',
  },
  grow: {
    flex: '1 1 auto',
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              CloudArk 1.0
            </Typography>
            <div className={classes.grow} />
            <IconButton
              component="a"
              title="GitHub"
              color="contrast"
              href="https://github.com/mui-org/material-ui"
            >
              <Github />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);
