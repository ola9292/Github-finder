
import React, { Component } from 'react'
import { Link } from "react-router-dom";
function Navbar(props){
  const {icon, title }= props
  return(
    <div className='navbar bg-primary'>
        
        <h2><i className={icon}></i>{title}</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
  )
}
Navbar.defaultProps={
  title:"Github Finder"
}
export default Navbar
