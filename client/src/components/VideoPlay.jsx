import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles, AppBar } from '@material-ui/core';
import Option from "./Option";
import Notification from "./Notification";
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '3px solid black ',
    margin: '10px',
  },
}));

const useVideoStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 0,
    margin: '70px 50px',
    display: 'flex',
    fontsize: '2.0rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background:'#505AC9',
    color: 'white',
    fontFamily:'Times New Roman',
    width: '330px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
image: {
    marginLeft: '15px',
  },
wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const VideoPlay = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();
  const obj = useVideoStyles();
  return (
    
      <div className={obj.wrapper}>
      <AppBar className={obj.appBar} position="static" color="inherit">
       <Typography variant="h3" align="center">VIDEO CALL 
    </Typography>
    </AppBar>
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>{name || 'UserName'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>{call.name || 'CallerName'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      </Grid>
      <Option>
<Notification />
</Option>
</div>
    


  );
};

export default VideoPlay;