import React from 'react'
import HomeHero from '../components/Home.Hero'
import HomeFooter from '../components/Home.Footer'
import { StyledHome } from '../components/styles/Home.styled'

const Home = () => {
    return (
        <StyledHome>
            <HomeHero />
            <HomeFooter />
        </StyledHome>
    )
}

export default Home