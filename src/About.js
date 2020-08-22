import React, { Component } from 'react';

import { ABOUT } from "./CONSTANTS";

import './About.css';

class About extends Component {
  componentDidMount() {
    let content = document.getElementsByClassName("content")[0];
    content.classList = "content";
                                                                 
    let footer = document.getElementsByTagName("footer")[0];
    footer.classList = "";
  }
  render() {
    return (
      <div className="about-contain">
        <div className="input-bg">
          <div className="about-msg-contain">
            { ABOUT }
          </div>
        </div>
      </div>
    )
  }
}

export default About;
