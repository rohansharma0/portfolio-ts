import React from "react";
import Menu from "./Menu";
import { StyledNavBar } from "./styles/NavBar.styled";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <StyledNavBar>
            <div className="logo-container clickableLinkGlow">rohan</div>

            <div className="hero-nav">
                <ThemeSwitch />
                <ul>
                    <li><a href="/">Home.</a></li>
                    <li><a href="about">About.</a></li>
                    <li><a href="contact">Contact.</a></li>
                </ul>
            </div>
            <Menu />
        </StyledNavBar>
    );
};

export default NavBar;
