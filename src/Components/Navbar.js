import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Shopping Cart</h1>
        <div className='navlinks'>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/mycart">Cart Page</NavLink>
        </div>
    </div>
  )
}

export default Navbar