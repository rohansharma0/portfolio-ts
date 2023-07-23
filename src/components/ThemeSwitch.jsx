import React, { useContext, useEffect, useState } from 'react'
import { StyledThemeSwitch } from './styles/ThemeSwitch.styled'
import { ThemeContext } from '../providers/ThemeContext'

const ThemeSwitch = () => {

    const handleSwitch = () => {
        if (themeContext.theme === "darkTheme") {
            themeContext.setTheme("lightTheme")
        } else {
            themeContext.setTheme("darkTheme")
        }
    }

    const themeContext = useContext(ThemeContext);

    return (
        <StyledThemeSwitch onClick={handleSwitch}>
            {themeContext.theme === "darkTheme" ? (<div className="sun icon"></div>) : (<div className="moon icon"></div>)}

        </StyledThemeSwitch>

    )
}

export default ThemeSwitch