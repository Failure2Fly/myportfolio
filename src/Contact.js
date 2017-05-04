import React, { Component } from 'react';
import $ from 'jquery'

class Contact extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return <div className="contact-background">
    <a name="contact"></a>
      <div className="row">
            <div className="col s12 m4 contact-info">
                <h1 className="contact-title">Contact Me</h1>
                <h4 className="contact-subtitle">If you're interested in working with me feel free to send me a message.</h4>
                <ul className="collapsible contact-collapsible" data-collapsible="expandable">
                  <li>
                    <div className="collapsible-header">
                    <i className="material-icons">call</i>Phone<span className="info">(260)-348-6951</span>
                    </div>
                      <div className="collapsible-body"><span>(260)-348-6951</span></div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                    <i className="material-icons">description</i>Resume<span className="info"><a className="icon" href="https://docs.google.com/document/d/1kZzss5B5N4KNEUlYMmN5Dw_wvTacTFKmUX00AaJ7UmU/edit?usp=sharing" target="_blank">Click Here</a></span>
                    </div>
                      <div className="collapsible-body"><span></span></div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                    <i className="material-icons">mail</i>Email<span className="info">frontdevdevin@gmail.com</span>
                    </div>
                      <div className="collapsible-body"><span>frontdevdevin@gmail.com</span></div>
                  </li>
                </ul>
                <div className="github-linkedIn-links">
                  <a className="icon" href="https://github.com/Failure2Fly" target="_blank"> <i className="fa fa-github fa-2x" aria-hidden="true"></i> My Github</a>
                  <a className="icon" href="https://www.linkedin.com/in/devin-blankenship-595214b2/" target="_blank"> <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i> My LinkedIn</a>
                </div>
            </div>
            <form action="https://formspree.io/frontdevdevin@gmail.com"
              method="POST" className="col s12 m8">
              <div className="row contact-form">
              
                <div className="input-field col s6 m6">
                  <div className="form-input">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" name="Name" placeholder="Name"/>
                    <label for="icon_prefix"></label>
                  </div>
                </div>
                <div className="input-field col s6 m6">
                  <div className="form-input">
                    <i className="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" className="validate" name="Phone_number" placeholder="Telephone" />
                    <label for="icon_telephone"></label>
                  </div>
                </div>
     
                <div className="row">
                  <div className="input-field col s12">
                    <div className="form-input">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea id="icon_prefix2" className="materialize-textarea" name="Message" placeholder="Message"></textarea>
                      <label for="icon_prefix2"></label>
                    </div>
                  </div>
                </div>
                
                <div className="input-field col s12 m6">
                  <div className="form-input">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" name="_Replyto" placeholder="Email"/>
                    <label for="icon_prefix"></label>
                  </div>
                </div>
                <div className="input-field col s12 m6 form-submit-button">
                  <div className="form-input">
                    <button className="btn waves-effect waves-light" type="submit" name="action" value="send">Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>

              </div>
            </form>
        </div>
    </div>
  }
}


export default Contact;