import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Splash.css';

let dootCounter = 0;
setInterval(() => {
  let e = document.getElementsByClassName("splash-loading-box")[0];
  let eDoot = document.createElement("div");

  if (dootCounter > 14) {
      e.innerHTML = '';
      dootCounter = 0;
  }

  eDoot.classList.add("splash-loading-doot");
  e.appendChild(eDoot);
  dootCounter++;

}, 300);

class Splash extends Component {
  render() {
    return (
      <div className="splash-container">
        <div className="audio-control mute"/>
        <div className="top-splash-container">
          <div className="splash-child">
            <img className="rotated" src="/logo.png" width="50"/>
            <div className="kana pink">ハルシオン</div>
          </div>
          <div className="splash-child"/>
          <div className="splash-child">
            <div className="year-logo">2020</div>
          </div>
        </div>
        <div className="mid-splash-container">
          <div className="splash-logo-container">
            <div className="splash-logo"/>
            <div className="splash-logo-shadow"/>
          </div>
        </div>
        <div className="bottom-splash-container">
          <div className="splash-child">
            <div className="year-logo rotated">2020</div>
          </div>
          <div className="splash-child">
            <div className="splash-loading-text">
                LOADING
            </div>
            <div className="splash-loading-box-container">
              <div className="splash-loading-box"/>
            </div>
          </div>
          <div className="splash-child">
            <div className="kana purple rotated">ハルシオン</div>
            <img src="/logo.png" width="50"/>
          </div>
        </div>
        <audio controls>
          <source src="website_riff.mp3" type="audio/mp3"/>
        </audio>
      </div>
    )
  }
}

export default Splash;

ReactDOM.render(
  <React.StrictMode>
    <Splash/>
  </React.StrictMode>,
  document.getElementById('root')
);

let ac = document.getElementsByClassName("audio-control")[0];
let a = document.getElementsByTagName("audio")[0];
let val = 0;
ac.addEventListener("click", ()=> {
    if (val == 0) {
        ac.classList.remove("mute");
        ac.classList.add("audio");
        val = 1;
        a.play();
    }
    else {
        ac.classList.remove("audio");
        ac.classList.add("mute");
        val = 0;
        a.pause();
    }
});
