import React, { useEffect } from 'react'
import { StyledBackground } from '../components/styles/Background'

const Background = () => {
    useEffect(() => {
        console.log("background-changed");
    })

    return (
        <StyledBackground>
            <div className="noise"></div>
        </StyledBackground>
    )
}

export default Background