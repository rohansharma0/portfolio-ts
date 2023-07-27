import React from 'react'
import { StyledAbout } from '../components/styles/About.styled'
import photo from "../static/img/photo.JPG";
const About = () => {
    return (
        <StyledAbout>
            <div className='left-section'>
                <div className='title'>
                    <p>Nice to</p>
                    <p>meet <span>you!</span></p>
                </div>
                <div className='info'>
                    <p>Hi, my name is Rohan Shamra. I'm a specialist in the web developing field and working in this field for more than four years. I'm quite expert in coding and using frontend and backend freamworks.</p>
                </div>

            </div>
            <div className='image-section'>
                <img src={photo} />
            </div>
            <div className='links'>
                <ul>
                    <li><a href="https://www.instagram.com/rohan__sharma0/"
                        target="_blank">instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/iamrohan29"
                        target="_blank">linkedin</a></li>
                    <li><a href="https://www.facebook.com/rohan.sharma.9903" target="_blank">facebook</a></li>
                </ul>
            </div>
        </StyledAbout>
    )
}

export default About