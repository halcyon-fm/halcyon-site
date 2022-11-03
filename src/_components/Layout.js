/*
 *  filename: src/Layout.js
 *  description: -
 **/

/** External imports **/
import React, {
    useEffect,
    useState,
} from 'react';
import {
    Outlet,
    useLocation,
    useOutlet,
} from 'react-router-dom';

/** Project imports - JS **/
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Stars from 'Components/Stars';

/** Project imports - CSS **/
//-

const Layout = ({ props }) => {

    // -- Outlet delay for fade in/fade out transition --/
    const [outlet, setOutlet] = useState(useOutlet());
    const [location, setLocation] = useState(useLocation());
    const [transition, setTransition] = useState('fade-in');

    const nextLocation = useLocation();
    const nextOutlet = useOutlet();

    useEffect(() => {
        if (location.pathname !== nextLocation.pathname) {
            setTransition('fade-out');
            setTimeout(() => {
                setLocation(nextLocation);
                setOutlet(nextOutlet);
                setTransition('fade-in');
            }, 500);
        }
    });

    //-- Title animation --//
    useEffect(() => {
        let title = 0;
        setInterval(() => {
            if (title === 0) {
                document.title = '✦✧  Halcyon ✧✦';
                title = 1;
            }
            else {
                document.title = '✧✦ Halcyon ✦✧';
                title = 0;
            }
        }, 1000);
    }, []);

    return(
        <>
            <Stars/>
            <div className='clouds' key='clouds'/>
            <Navbar/>
            <div className={`main-content ${transition}`} pathname={location.pathname}>
                { outlet }
            </div>
            <Footer/>
        </>
    )
}

export default Layout;
