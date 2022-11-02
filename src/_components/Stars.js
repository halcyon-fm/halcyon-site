import React, { Component } from 'react';

import "CSS/_components/stars.scss";

const randInt = (min, max) => { 
    return Math.floor(Math.random() * (max - min)) + min;
}

class Stars extends Component {
  constructor(props) {
    super(props);
    this.availableSizes = ["twinkle-small", "twinkle-medium", "twinkle-large"];
    this.justify = [];
  }

  componentDidMount() {
    setInterval(() => {
      let allStars = document.getElementsByClassName("star");
      let randomStarIdx = randInt(0, allStars.length);
      let randomTwinkleIdx = randInt(0, this.availableSizes.length);
      const star = allStars[randomStarIdx];
      if (star.className == "star") {
        star.className = `star ${this.availableSizes[randomTwinkleIdx]}`;
        setTimeout(() => {
          star.className = "star";
        }, 4000);
      }
    }, 500);
  }

  render() {
    let stars = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        stars.push(<div className="star">+</div>);
      }
    }

    return (
      <div className="stars">
        { stars }
      </div>
    )
  }
}

export default Stars;
