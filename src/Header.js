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
      
       <div className=" row navbar navbar-expand-lg navbar-light  link  " style = {{width:"100%"}}>
       <div className=" col-lg-12 col-xl-12 col-md-12 col-sm-6 container-fluid link" >
            <ul style ={{textAlign:"center"}} className="navbar-nav">
            <li className="nav-item" style ={{textAlign:"center",}}>
            <NavLink  className="nav-link active " to="/home" exact activeStyle={ {color:'red'}  }>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active " to="/country" style ={{textAlign:"center",}} exact activeStyle={    {color:'red'}}>Check Country wise </NavLink>
            </li>
             
            <li className="nav-item">
            <NavLink className="nav-link active " to="/indianstates" exact activeStyle={    {color:'red'}}>Indian States </NavLink>
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