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
              <h4 className="about-project">This was my first project working with a partner. I learned the best way to communicate with someone on the back-end and the process in which to complete a simple application within a 4 day period.</h4>
          </div>

          <div className="col s12 m4 taradiddle-background">
              <img id="samplesPic" href="" src="img/Taradiddle.png" />
              <a className="project-link" href="https://github.com/Failure2Fly/Taradiddle" target="_blank">Taradiddle Github</a>
              <h2 className="what-was-used">HTML, CSS, Javascript, React, Bulma, AJAX, Github</h2>
              <h4 className="about-project">Learned how to better manage a product from start to finish using the github workflow. Better understood what I needed to ask for from the Back-end. Learned more about intervals and setting up routes for a bigger scope project.</h4>
          </div>

          <div className="col s12 m4 notes-background">
              <img id="samplesPic" href="" src="img/Notes.png" />
              <a className="project-link" href="https://github.com/Failure2Fly/Create-a-notes-app" target="_blank">Notes Github</a>
              <h2 className="what-was-used">HTML, CSS, Javascript, React, AJAX, Bulma</h2>
              <h4 className="about-project">Worked with Bulma for the first time. Learned some of the differences between Bootstrap and it. First time using Store.js in order to have things save and still be there in the browser when I would return. This was also one of my first multi-component react projects.</h4>
          </div>
    </div>
    </div>
  }
}

export default Work;
