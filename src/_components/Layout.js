/*
 *  filename: src/Layout.js
 *  description: -
 **/

/** External imports **/
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

/** Project imports - JS **/
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Stars from 'Components/Stars';

/** Project imports - CSS **/
//-

const Layout = ({ props }) => {
    const location = useLocation();

    return(
        <>
            <Stars/>
            <div className='clouds' key='clouds'/>
            <Navbar/>
            <div className='main-content' pathname={ location.pathname }>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default Layout;
