import React from "react";
import { Typography, AppBar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlay from "./components/VideoPlay";
import Option from "./components/Option";
import Notification from "./components/Notification";
const useStyles = makeStyles((theme) => ({
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
    width: '450px',
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
    LIVE STREAM
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
