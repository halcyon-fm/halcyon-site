/*
 *  filename: src/Home.js
 *  description: -
 **/

/** External imports **/
import React from 'react';

/** Project imports - JS **/
//-

/** Project imports - CSS **/
import "CSS/animations.scss";
import "CSS/index.scss";

const Home = ({ props }) => {
    return (
        <div className="home-contain" key="home-contain">
            <img
                key="halcyon-logo"
                alt="halcyon-logo"
                width="500px"
                height="500px"
                src={require('Images/favicon.png')}
                className="logo"
            />
        </div>
    )
}

export default Home;
