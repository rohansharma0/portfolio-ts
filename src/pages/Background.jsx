import React, { useEffect, useRef, useContext } from 'react'
import { StyledBackground } from '../components/styles/Background'
import { gsap } from 'gsap'
import { ThemeContext } from 'styled-components';

const Background = () => {
    let backgroundRef = useRef(null);

    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        changeBackgroundColorAnimation();
        console.log(themeContext);

    })

    const changeBackgroundColorAnimation = () => {
        // gsap.to(backgroundRef, {
        //     scrollTrigger: {
        //         trigger: "#homeFooter",
        //         start: "top center",
        //         markers: true,
        //     },
        //     // backgroundColor: themeContext.footerBackgroundColor,

        // })
    }

    return (
        <StyledBackground ref={el => backgroundRef = el}>
            <div className="noise"></div>
        </StyledBackground>
    )
}

export default Background