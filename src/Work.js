import React, { Component } from 'react';

class Work extends Component {
  render() {
    return <div className="work-background">
    <a className="" name="work"></a>
      <div className="row">
          <div className="col s12 m12 work-col">
                  <h1 className="work-title" >WORK SAMPLES</h1>
          </div>

          <div className="col s12 m4 chirps-background">
              <img id="samplesPic" href="" src="img/Chirps.png" />
              <a className="project-link" href="https://github.com/Failure2Fly/d4-make-chirp" target="_blank">Chirps Github</a>
              <h2 className="what-was-used">HTML, CSS, Javascript, Bootstrap, AJAX, Github</h2>
              <h4 className="about-project">This was my first project working with a back-end developer. Used Fetch requests to communicate with Ruby on Rails. Worked with Json and Session Storage. Completed within a 4 day time-span.</h4>
          </div>

          <div className="col s12 m4 taradiddle-background">
              <img id="samplesPic" href="" src="img/Taradiddle.png" />
              <a className="project-link" href="https://github.com/Failure2Fly/Taradiddle" target="_blank">Taradiddle Github</a>
              <h2 className="what-was-used">HTML, CSS, Javascript, React, Bulma, AJAX, Github</h2>
              <h4 className="about-project">Learned how to better manage a product from start to finish using the github workflow. Worked with Oauth for Twitter Authorization. Used Google Charts. Used fetch requests to pull twitter info and workout regement from Back-end.</h4>
          </div>

          <div className="col s12 m4 notes-background">
              <img id="samplesPic" href="" src="img/Notes.png" />
              <a className="project-link" href="https://github.com/Failure2Fly/Create-a-notes-app" target="_blank">Notes Github</a>
              <h2 className="what-was-used">HTML, CSS, Javascript, React, AJAX, Bulma</h2>
              <h4 className="about-project">Used Bulma instead of Bootstrap. Built using React and react-router. Worked with Store.js in order to save and store notes for future use. Worked on design for a good portion of this project. First full/complete project using React. </h4>
          </div>
    </div>
    </div>
  }
}

export default Work;
