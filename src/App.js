import React, { Component } from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

import Home from './Home';
import About from './About';
import Releases from './Releases';
import Contact from './Contact';
import Stars from './Stars';
import {
  FacebookSVG,
  InstagramSVG,
  SoundCloudSVG,
  TwitterSVG,
} from './Svg';
import Error from './Error';

class App extends Component {
  componentDidMount() {
    let ac = document.getElementsByClassName("audio-control")[0];
    let a = document.getElementsByTagName("audio")[0];
    function audioControl() {
      if (ac.classList.contains("mute")) {
        ac.classList.add("audio");
        ac.classList.remove("mute");
        a.play();
      }
      else {
        ac.classList.add("mute");
        ac.classList.remove("audio");
        a.pause();
      }
    }
    ac.addEventListener("click", audioControl);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="audio-contain">
          <div className="audio-control mute"/>
        </div>
        <Stars/>
        <div className="clouds" key="clouds"/>
        <nav>
          <ol>
            <li className="home">
              <NavLink exact to="/">HOME</NavLink>
            </li>
            <li className="releases">
              <NavLink to="/releases">RELEASES</NavLink>
            </li>
            <li className="contact">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li className="shop">
              <a href="https://shop.halcyon.fm" >SHOP</a>
            </li>
          </ol>
        </nav>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/releases" component={Releases}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
      </div>
      <footer>
        <div className="social-media-bar">
          <TwitterSVG/>
          <InstagramSVG/>
          <FacebookSVG/>
          <SoundCloudSVG/>
        </div>
        <div className="copyright-text">
          Copyright © 2020 Halcyon LV | All rights reserved
        </div>
      </footer>
      </BrowserRouter>
    )
  }
}

export default App;
