import styled from "styled-components";

export const StyledLogo = styled.div`
	.logo {
		fill: ${props => props.theme.primaryColor};
		width: 70px;
		height: auto;
		
		path{
			fill: ${props => props.theme.primaryColor};
		}
	}
	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
	}

	/* Large devices (laptops/desktops, 950px and up) */
	@media only screen and (min-width: 950px) {
		.logo {
			width: 80px;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
	}

	/* Extra large devices (large laptops and desktops, 1500px and up) */

	@media only screen and (min-width: 1560px) {
	}
`;
