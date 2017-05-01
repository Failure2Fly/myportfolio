import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return <div className="navbar-fixed">
    <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">DEVIN BLANKENSHIP</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  </div>
    
  }
}


export default Navbar;