import Logo from "./Logo"
import Nav from "./Nav"
import { StyledHeader } from "./styles/Header.styled"

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Nav />
        </StyledHeader>
    )
}

export default Header