import { styled } from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(180deg, rgb(0 0 0 / 35%) 0%, rgba(255,255,255,0) 100%);

    @media only screen and (min-width: 600px) {
	}

    @media only screen and (min-width: 950px) {
	}

    @media only screen and (min-width: 1200px) {
        padding: 3rem 4rem 0 4rem;
	}

`