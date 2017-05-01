import React, { Component } from 'react';

class About extends Component {
  render() {
    return <div>
    <a name="about" />
    <div className="about-background">
    <div className="hero-about">
        <div className="row">
            <div className="col s6 m3 about-pic">
                <img className="profile-pic" src="img/DevinSimpson.jpg" />
            </div>
            <div className="col s6 m3 about-title">
                <h1 className="title">About</h1>
            </div>
        </div>
    <div className="row">       
            <div className="col s12 m6">
                <h2 className="subtitle">
                  <span>I am a Front-End Engineer living in Indianapolis, Indiana. I love myself a good puzzle and the "Eureka!" moment that follows when I solve it. I believe you should always be learning and finding better solutions to those problems. I enjoy being as creative as I can while keeping aligned with a simple product that will be user friendly for all.</span><br/><br/>
                  <span>I love The Simpsons, playing board games and challenging myself to the occasional escape room once in a while.</span>
                </h2>
            </div>
        </div>
        </div>
    </div>
    </div>
  }
}

export default About;