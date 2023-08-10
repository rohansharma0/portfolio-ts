import React from 'react'
import { StyledHero } from './styles/Hero.styled'
import Resume from "../static/files/RohanSharma.pdf";

const Hero = () => {
    return (
        <StyledHero id='about'>
            <p className='about'>
                hi, i am rohan, a designer & developer based in india. i am available for work from now on.
            </p>
            <div
                className="resume-btn"
            >
                <a href={Resume} target="_blank">
                    RESUME
                    <span className="border"></span>
                    <span className="border-hover1"></span>
                    <span className="border-hover2"></span>
                </a>
            </div>
        </StyledHero>
    )
}

export default Hero