import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import Home from './home'
import About from './about'
import MarketPLace from './marketPLace'
import Login from './Login'
import LoginForm from './loginForm'
import RegistrationForm from './registrationForm'

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "Home" component = {Home} />
         
         <Route path = "about" component = {About} />
         <Route path = "marketPLace" component = {MarketPLace} />     
             
      </Route>
   </Router>
	
), document.getElementById('root'))