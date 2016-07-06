/**
  * Danilo Zekovic
  * Shell.js
  * used to navigate the client side,
  * it connects all the modules and functionality of the app
  */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Chat from './modules/Chat'
import Home from './modules/Home'
import Header from './modules/App'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Home}/>
      <Route path="/chat" component={Chat}/>
    </Route>
  </Router>
), document.getElementById('app'))
