import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return <div>
    <a name="skills" />
    <div className="row skills">
        <div className="col s12">
            <div className="hero-skills">
                <h1 className="center-align skills-title">Front-End Engineer</h1>
                <img className="navbar-picture" src="/img/DevinKorea.jpg" /> 
            <h4 className="center-align subtitle">
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
                <span className="skill">Bootstrap</span>
                <span className="skill">JavaScript</span>
            </h4>
            <h4 className="center-align subtitle skills-two">
                <span className="skill">React</span>
                <span className="skill">Node</span>
                <span className="skill">Github</span>
                <span className="skill">Jquery</span>
                <span className="skill">SQL</span>
            </h4>
            </div>
        </div>
        </div>
    </div>
  }
}

export default Skills;