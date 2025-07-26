import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id='navbar'>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/Contact'>
        <li>Contact</li>
      </Link>
      <li>Contact</li>
      <li>About</li>
      <li>Services</li>
    </div>
  )
}

export default NavBar