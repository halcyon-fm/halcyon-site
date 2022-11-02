/*
 *  filename: src/_components/Navbar.js
 *  description: -
 **/

/** External imports **/
import React from 'react';
import { NavLink } from 'react-router-dom';

/** Project imports - JS **/
//-

/** Project imports - CSS **/
import 'CSS/_components/navbar.scss';

const Navbar = ({ props }) => {
    return(
        <nav>
            <ol>
                <li className='home'>
                    <NavLink to='/' end>HOME</NavLink>
                </li>
                <li className='releases'>
                    <NavLink to='/releases'>RELEASES</NavLink>
                </li>
                <li className='contact'>
                    <NavLink to='/contact'>CONTACT</NavLink>
                </li>
                <li className='shop'>
                    <a href='https://shop.halcyon.fm'>SHOP</a>
                </li>
            </ol>
        </nav>
    )
}

export default Navbar;
