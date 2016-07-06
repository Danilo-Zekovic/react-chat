/**
  * Danilo Zekovic
  * Navigation bar that will appear on every views
  * Planing to move the logic to Header.js
  */

import React from 'react'
import NavLink from './NavLink'

export default React.createClass({

  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/chat">Chat</NavLink></li>
        </ul>
        {this.props.children}

      </div>
    )
  }
})
