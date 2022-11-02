import React, { Component } from 'react';

import "./Home.css";

class Home extends Component {
  componentDidMount() {
    let root = document.getElementById("root");
    root.classList = "";

    let content = document.getElementsByClassName("content")[0];
    content.classList = "content";

    let footer = document.getElementsByTagName("footer")[0];
    footer.classList = "";
  }

  render() {
    return (
      <div className="home-contain" key="home-contain">
        <img key="halcyon-logo" alt="halcyon-logo" width="500px" height="500px" src="/favicon.png" className="logo"/>
      </div>
    )
  }
}

export default Home;
