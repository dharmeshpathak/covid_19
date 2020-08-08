import React from 'react';  
import ReactDOM from 'react-dom';  
//import { BrowserRouter as Router, Route,  NavLink, Switch } from 'react-router-dom'  
import './index.css';  
import App from './App';  
// import About from './About'  
// import Contact from './Contact'  
// import Notfound from './NotFound'  
// import "./index.css";
  
// const routing = (  
//   <Router >  
//     <div className = "menu">  
//       <h1>React Router Example</h1>  
//       <div>
//       <ul>  
//         <li>  
//           <NavLink to="/" exact activeStyle={    {color:'red'}  }>Home</NavLink>  
//         </li>  
//         <li>  
//           <NavLink to="/about" exact activeStyle={   {color:'green'}   }>About</NavLink>  
//         </li>  
//         <li>  
//           <NavLink to="/contact" exact activeStyle={  {color:'magenta'}   }>Contact</NavLink>  
//         </li>  
//       </ul>  
//       </div> 
//       <Switch>  
//          <Route exact path="/" component={App} />  
//          <Route path="/about" component={About} />  
//          <Route path="/contact" component={Contact} />  
//          <Route component={Notfound} />  
//       </Switch>  
//     </div>  
//   </Router>  
// ) 
ReactDOM.render(<App />, document.getElementById('root'));  