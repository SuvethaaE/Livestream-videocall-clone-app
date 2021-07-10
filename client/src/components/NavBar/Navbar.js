import React from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';
import ScheduleList from "../WorkSchedule/Work";
import VideoPlay from "../VideoPlay";

import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

    function Navbar() {
        const [state, setState] = React.useState({clicked:false})
        // state={clicked:false}
    
    const handleClick = ()=>{
        setState({clicked: !state.clicked})
    }
    
     
      

       return(
         <div>
           <nav className="Nav1">
            <h2 className="Nav2">LIVE STREAM<i className="Nav4"></i></h2>
            <div className="Nav3" onClick={handleClick}>
           <i className={state.clicked? 'fas fa-times' : 'fas fa-bars' }></i>
            </div>
            <ul className={state.clicked ? 'nav-menu active':'nav-menu'}>
            
                {MenuItems.map((item,index)=>{
                return(
                    
                    <li key={index} >
                        <a className={item.cName} href={item.url}>
                    {item.title}
                    </a></li>
                )
                })}
            </ul>
            
           </nav>

<Router>
<div>
<Switch>
<Route path="/schedule">
  <ScheduleList />
</Route>
<Route path="/">
<VideoPlay />
</Route>
</Switch>
</div>
</Router>
</div>
       )
   
}
export default Navbar;