import React from "react";
import { Typography, AppBar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlay from "./components/VideoPlay";
import Option from "./components/Option";
import Notification from "./components/Notification";
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 0,
    margin: '50px 50px',
    display: 'flex',
    fontsize: '2.0rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background:'rgb(37, 150, 190)',
    color: 'black',
    fontFamily:'Times New Roman',
    width: '380px',
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
const App = () =>{
  const obj = useStyles();
  return(
  <div className={obj.wrapper}>
     <AppBar className={obj.appBar} position="static" color="inherit">
    <Typography variant="h2" align="center">
    VIDEO CALL
    </Typography>
     </AppBar>
     <VideoPlay />
     <Option>
       <Notification />
       </Option>
  </div>
  );
}
  
export default App;
