import React from 'react'
import { Link, NavLink } from 'react-router'


function Nav() {
  return (
    <div>
      <NavLink to="/about" >About</NavLink>
      <NavLink to="/dashboard" >Dashboard</NavLink>
      <NavLink to="/service" >Service</NavLink>
      <NavLink to="/login" >Login</NavLink>



      {/* Link Tag */}
      {/* <Link to="/about" >About</Link>
      <Link to="/dashboard" >Dashboard</Link>
      <Link to="/service" >Service</Link>
      <Link to="/login" >Login</Link> */}
    </div>
  )
}

export default Nav
