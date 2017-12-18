import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import logo from './logo.svg';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Github from './components/Github';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import SonarrIcon from './sonarr.png'
import RadarrIcon from './radarr.png'
import PlexIcon from './plex.png'
import DriveIcon from './drive.png'
import JackettIcon from './jackett.png'
import NzbgetIcon from './nzbget.png'
import DelugeIcon from './deluge.png'
const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#eeeeee'
  },
  grow: {
    flex: '1 1 auto',
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    maxWidth: 960,
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
    margin: 'auto',
    marginTop: 40
  },
  card: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  cover: {
    width: 151,
    height: 151,
    backgroundColor: "#ccc"
  },

});

class App extends Component {
  getCards() {
    const { classes } = this.props;
    const sites = [
      {
        name: "Sonarr",
        purpose: "Find and Download TV Shows",
        actions: [
          {
            text: "Open",
            url: "https://sonarr.cloudark.stream/"
          }
        ],
        icon: SonarrIcon,
        iconPadding: 8
      },
      {
        name: "Radarr",
        purpose: "Find and Download Movies",
        actions: [
          {
            text: "Open",
            url: "https://radarr.cloudark.stream/"
          }
        ],
        icon: RadarrIcon,
        iconPadding: 8
      },
      {
        name: "Plex",
        purpose: "Stream from CloudArk",
        actions: [
          {
            text: "Open",
            url: "https://plex.cloudark.stream/"
          }
        ],
        icon: PlexIcon
      },
      {
        name: "Google Drive",
        purpose: "Direct Access to files",
        actions: [
          {
            text: "Movies",
            url: "https://drive.google.com/drive/folders/0AGSae89HcTbQUk9PVA"
          },
          {
            text: "TV Shows",
            url: "https://drive.google.com/drive/folders/0AHU4WXXItXkkUk9PVA"
          }
        ],
        icon: DriveIcon
      }
    ]
    let cards = [];
    sites.forEach((site,index) => {
      let buttons = [];
      site.actions.forEach((action,index) => {
        buttons.push(
          <Button onClick={() => {window.open(action.url, "_blank")}} key={index} dense>{action.text}</Button>
        )
      })
      cards.push(
        <Grid item xs={12} sm={6} key={index}>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography type="headline" component="h2">
                  {site.name}
                </Typography>
                <Typography className={classes.pos}>{site.purpose}</Typography>
              </CardContent>
              <CardActions>
                {buttons}
              </CardActions>
            </div>
            {site.icon ? <CardMedia
                          className={classes.cover}
                          image={site.icon}
                          title="Icon" /> : null }
          </Card>
        </Grid>
      )
    })

    return cards;
  }

  getBTSCards() {
    const { classes } = this.props;
    const sites = [
      {
        name: "Deluge",
        purpose: "Torrent Downloader",
        actions: [
          {
            text: "Open",
            url: "https://deluge.cloudark.stream/"
          }
        ],
        icon: DelugeIcon,
        iconPadding: 8
      },
      {
        name: "Nzbget",
        purpose: "Usenet Downloader",
        actions: [
          {
            text: "Open",
            url: "https://nzbget.cloudark.stream/"
          }
        ],
        icon: NzbgetIcon,
        iconPadding: 8
      },
      {
        name: "Jackett",
        purpose: "Tracker management",
        actions: [
          {
            text: "Open",
            url: "https://jackett.cloudark.stream/"
          }
        ],
        icon: JackettIcon
      }
    ]
    let cards = [];
    sites.forEach((site,index) => {
      let buttons = [];
      site.actions.forEach((action,index) => {
        buttons.push(
          <Button onClick={() => {window.open(action.url, "_blank")}} key={index} dense>{action.text}</Button>
        )
      })
      cards.push(
        <Grid item xs={12} sm={6} key={index}>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography type="headline" component="h2">
                  {site.name}
                </Typography>
                <Typography className={classes.pos}>{site.purpose}</Typography>
              </CardContent>
              <CardActions>
                {buttons}
              </CardActions>
            </div>
            {site.icon ? <CardMedia
                          className={classes.cover}
                          image={site.icon}
                          title="Icon" /> : null }
          </Card>
        </Grid>
      )
    })

    return cards;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              CloudArk
            </Typography>
            <div className={classes.grow} />
            <IconButton
              component="a"
              title="GitHub"
              color="contrast"
              href="https://github.com/Aubron/CloudArk-UI"
            >
              <Github />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Grid container spacing={24}>
            {this.getCards()}
            <Grid item xs={12}>
              <Typography type="headline" color="inherit">
                Behind the Scenes
              </Typography>
            </Grid>
            {this.getBTSCards()}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
