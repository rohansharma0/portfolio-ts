import Menu from "./Menu";
import { StyledNavBar } from "./styles/NavBar.styled";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <StyledNavBar>
            <div className="logo-container clickableLinkGlow">
                <Logo />
            </div>

            <div className="hero-nav">
                <ThemeSwitch />
                <ul>
                    <li><Link to="/">Home.</Link></li>
                    <li><Link to="/about">About.</Link></li>
                    <li><Link to="/contact">Contact.</Link></li>
                </ul>
            </div>
            <Menu />
        </StyledNavBar>
    );
};

export default NavBar;
