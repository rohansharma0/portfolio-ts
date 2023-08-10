import React from 'react'
import { StyledFooter } from './styles/Footer.styled'
import InstaSVG from "../../static/img/instagram-v2.svg";
const Footer = () => {
    return (
        <StyledFooter>
            <nav className='footer-links'>
                <ul>
                    <li>
                        <a><img src={InstaSVG} alt="instaSVG" /></a>
                    </li>
                    <li>
                        <a><img src={InstaSVG} alt="instaSVG" /></a>
                    </li>
                    <li>
                        <a><img src={InstaSVG} alt="instaSVG" /></a>
                    </li>
                </ul>
            </nav>

            <div className='scroll-progress'>
            </div>
        </StyledFooter>
    )
}

export default Footer