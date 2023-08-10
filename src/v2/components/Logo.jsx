import React from 'react'
import { StyledLogo } from './styles/Logo.styled'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <StyledLogo>
            <Link to='/v2'>Rohan</Link>
        </StyledLogo>
    )
}

export default Logo