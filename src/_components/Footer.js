/*
 *  filename: src/_components/Footer.js
 *  description: -
 **/

/** External imports **/
import React from 'react';

/** Project imports **/
import FooterIcons from 'Images/footer_icons.svg';

/** Project imports - CSS **/
import 'CSS/_components/footer.scss';

const FooterIcon = (props) => {
    const L = '30px';
    const VIEWBOX = '0 0 24 24';

    return(
        <svg
            width={L}
            height={L}
            viewBox={VIEWBOX}
            onClick={() => { window.open(props.link) }}
            className={`footer-icon ${props.name}-social`}
        >
            <use href={FooterIcons + `#${props.name}`} />
        </svg>
    )
};

const Footer = (props) => {
    return(
        <footer>
            <div className='footer-icon-contain'>
                <FooterIcon name='twitter' link='https://twitter.com/HalcyonLV'/>
                <FooterIcon name='instagram' link='https://instagram.com/halcyonlv'/>
                <FooterIcon name='facebook' link='https://facebook.com/LvHalcyon'/>
                <FooterIcon name='soundcloud' link='https://soundcloud.com/halcyonlv'/>
            </div>
            <div className='copyright'>
                Copyright © 2020-2023 Halcyon LV | All rights reserved
            </div>
        </footer>
    )
}

export default Footer;
