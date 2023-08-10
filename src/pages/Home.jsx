import React from 'react'
import HomeHero from '../components/Home.Hero'
import HomeFooter from '../components/Home.Footer'
import { StyledHome } from '../components/styles/Home.styled'
import NavBar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <NavBar />
            <StyledHome>
                <HomeHero />
                <HomeFooter />
            </StyledHome>
        </>

    )
}

export default Home