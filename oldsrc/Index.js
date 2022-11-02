import React, { Component } from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';

import './Index.css';

import Home from './Home';
import About from './About';
import Releases from './Releases';
import Contact from './Contact';
import {
  FacebookSVG,
  InstagramSVG,
  SoundCloudSVG,
  TwitterSVG,
} from './Svg';
import Error from './Error';

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="clouds"/>
        <nav>
          <ol>
            <li className="home">
              <NavLink exact to="/">HOME</NavLink>
            </li>
            <li className="about">
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li className="releases">
              <NavLink to="/releases">RELEASES</NavLink>
            </li>
            <li className="contact">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ol>
        </nav>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
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
          Copyright © 2020 Halcyon LV | All rights reserverd
        </div>
      </footer>
      </BrowserRouter>
    )
  }
}

export default Index;
