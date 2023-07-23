import { useContext } from 'react'
import { StyledThemeSwitch } from './styles/ThemeSwitch.styled'
import { ThemeContext } from '../providers/ThemeContext'
import { Theme } from '../models/Theme'

const ThemeSwitch = () => {
    const handleSwitch = () => {
        if (themeContext.theme === Theme.Dark) {
            themeContext.setTheme(Theme.Light)
        } else {
            themeContext.setTheme(Theme.Dark)
        }
    }
    const themeContext = useContext(ThemeContext);

    return (
        <StyledThemeSwitch onClick={handleSwitch}>
            {themeContext.theme === Theme.Dark ? (
                <div className="sun"></div>
            ) : (
                <div className="moon-solid"></div>
            )}

        </StyledThemeSwitch>
    )
}

export default ThemeSwitch