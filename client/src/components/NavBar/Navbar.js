import React,{Component} from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';
import Schedule_list from "../WorkSchedule/Work";
import VideoPlay from "../VideoPlay";

import { useHistory, Link, BrowserRouter as Router, Switch, Route,} from "react-router-dom";

    function Navbar() {
        const [state, setState] = React.useState({clicked:false})
        // state={clicked:false}
    
    const handleClick = ()=>{
        setState({clicked: !state.clicked})
    }
    
     
      

       return(
         <div>
           <nav className="Nav1">
            <h1 className="Nav2">SUVECAM<i className="Nav4"></i></h1>
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
  <Schedule_list />
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