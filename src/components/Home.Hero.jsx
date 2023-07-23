import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
// import { HeroAnimation, ScrollBtnAnimation } from "../Helper/Animations";
// import Logo from "./Logo";
// import gsap from "gsap";
// import { useLocomotiveScroll } from "react-locomotive-scroll";
//files
import Resume from "../static/files/RohanSharma.pdf";
import { StyledHomeHero } from "./styles/Home.Hero.styled";

const HomeHero = () => {
    let text1: any = useRef(null);
    let text2: any = useRef(null);
    let text3: any = useRef(null);
    let text4: any = useRef(null);
    let resumeBtn: any = useRef(null);
    let scrollBtn: any = useRef(null);
    // const { scroll } = useLocomotiveScroll();

    let projectSectionPosotion = document.getElementById("project-section");

    useEffect(() => {
        // HeroAnimation(logo, [text1, text2], [text3, text4], resumeBtn);
        // ScrollBtnAnimation(scrollBtn);
    });

    useEffect(() => { });

    return (
        <StyledHomeHero id="hero-section">
            <div className="hero-section">
                <div className="top">
                    <p>
                        <span ref={(el) => (text1 = el)}>Rohan</span>
                    </p>
                    <p>
                        <span ref={(el) => (text2 = el)}>Sharma</span>
                    </p>
                </div>
                <div className="middle">
                    <p>
                        <span ref={(el) => (text3 = el)}>
                            creative frontend developer,
                        </span>
                    </p>
                    <p>
                        <span ref={(el) => (text4 = el)}>
                            designer and illustrator.
                        </span>
                    </p>
                </div>
                <div
                    className="resume-btn clickableLinkGlow"
                    ref={(el) => (resumeBtn = el)}
                >
                    <a href={Resume} target="_blank">
                        RESUME
                        <span className="border"></span>
                        <span className="border-hover1"></span>
                        <span className="border-hover2"></span>
                    </a>
                </div>
            </div>
            <div
                className="footer clickableLinkGlow"
            // onClick={() =>
            //     scroll.scrollTo(projectSectionPosotion.offsetTop)
            // }
            >
                <div className="arrow-down icon"></div>
            </div>
        </StyledHomeHero>
    );
};

export default HomeHero;
