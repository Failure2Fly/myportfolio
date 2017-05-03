import React, { Component } from 'react';
import $ from 'jquery'
import Navbar from './Navbar'
import Skills from './Skills'
import About from './About'
import Work from './Work'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Skills />
      <About />
      <Work />
      <Contact />
      </div>
    )
  }
}

export default App;
