import React, { Component } from 'react';

import { ABOUT } from "./CONSTANTS";

import './About.css';

class About extends Component {
  componentDidMount() {
    let root = document.getElementById("root");
    root.classList = "";

    let content = document.getElementsByClassName("content")[0];
    content.classList = "content";
                                                                 
    let footer = document.getElementsByTagName("footer")[0];
    footer.classList = "";

    this.fuckTheDOM.bind(this);
    this.fuckTheDOM();
    window.onresize = this.fuckTheDOM;
  }

  fuckTheDOM() {
    const birbLeft = document.getElementsByClassName("birb-left")[0];
    const birbRight = document.getElementsByClassName("birb-right")[0];
    if (!birbLeft || !birbRight) { return; }

    const parentContain = document.getElementsByClassName("about-contain")[0];
    if (window.innerWidth <= 920) {
      const birbBottoms = document.getElementsByClassName("birb-bottom");
      for (let i = 0; i < birbBottoms.length; i++) { birbBottoms[i].remove() }

      const birbBottom = document.createElement("div");
      birbBottom.className = "birb-bottom";
      birbBottom.appendChild(birbLeft)
      birbBottom.appendChild(birbRight)
      parentContain.prepend(birbBottom);
    }
    else {
      const parentContain = document.getElementsByClassName("about-contain")[0];
      parentContain.prepend(birbLeft);
      parentContain.appendChild(birbRight)
      const birbBottoms = document.getElementsByClassName("birb-bottom");
      for (let i = 0; i < birbBottoms.length; i++) { birbBottoms[i].remove() }
    }
  }

  render() {
    return (
      <div className="about-contain">
        <img className="birb birb-left" src="birb.png" width="auto" height="100%"/>
        <div className="input-bg about">
          <div className="about-msg-contain">
            { ABOUT }
          </div>
        </div>
        <img className="birb birb-right" src="birb.png" width="auto" height="100%"/>
      </div>
    )
  }
}

export default About;
