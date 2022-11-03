/*
 *  filename: src/Home.js
 *  description: -
 **/

/** External imports **/
import React from 'react';

/** Project imports - JS **/
//-

/** Project imports - CSS **/
import 'CSS/animations.scss';
import 'CSS/index.scss';

const Home = ({ props }) => {
    return (
        <>
            <img
                title='Halcyon Logo'
                src={require('Images/favicon.png')}
            />
        </>
    )
}

export default Home;
