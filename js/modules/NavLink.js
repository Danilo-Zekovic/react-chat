// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <Link className="page-scroll" {...this.props} activeClassName="active"/>
  }
})
