import { Link } from "react-router-dom"
import { StyledNav } from "./styles/Nav.styled"

const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </StyledNav>
    )
}

export default Nav