import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,  NavLink, Switch } from 'react-router-dom'  ;
import StateWise from './StateWise'  ;
 import CountryWise from './CountryWise';
import Home from './Home';  
import "./header.css";


function Header(){
    return(
        <>
        

<Router>
       <div className = "container  ">
      
       <div className=" row navbar navbar-expand-lg navbar-light  link  " >
       <div className=" col-lg-12 col-xl-12 col-md-12 col-sm-6 container-fluid link flex-column" >
            <ul style ={{textAlign:"center"}} className="navbar-nav">
            <li className="nav-item" style ={{textAlign:"center",}}>
            <NavLink  className="nav-link active " to="/home" exact activeStyle={ {color:'black'}  } style={{color:"white"}}>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active " to="/country" style ={{color:"white"}} exact activeStyle={ {color:'black',textDecoration:"underline"}} >Check Country wise </NavLink>
            </li>
             
            <li className="nav-item">
            <NavLink className="nav-link active " to="/indianstates" exact activeStyle={{color:'black'}} style={{color:"white"}}>Indian States </NavLink>
            </li> 
            </ul>
            </div>

        </div>
        <Switch>
            <Route exact path = "/home" component = {Home} />
             <Route exact path="/country" component={CountryWise} />  
           <Route exact path="/indianstates" component={StateWise} />  
        </Switch>
        </div>
        </Router>
       
        
     </>  

        
    )
}
 export default Header;
