import {NavbarContainer} from './Style'
import {NavLink} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="navbar-left">
        <NavLink to= "/home"> <i>{"<CLARUSWAY>"}</i> <span>RECIPE</span></NavLink>
      </div>
      <NavLink to='./about'>ABOUT</NavLink>
      <a href="_blank" rel='noreferrer' href ="https://github.com/mehmettas1">GITHUB</a>
      <NavLink to='./'>LOGOUT</NavLink>
    </NavbarContainer>
  )
}

export default Navbar