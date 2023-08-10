import styled from "styled-components";

export const StyledLogo = styled.div`
	.logo {
		fill: ${props => props.theme.primaryColor};
		width: 60px;
		height: auto;
		
		path{
			fill: ${props => props.theme.primaryColor};
		}
	}
	@media only screen and (min-width: 600px) {
	}
	@media only screen and (min-width: 950px) {
		.logo {
			width: 80px;
		}
	}
	@media only screen and (min-width: 1200px) {
	}
	@media only screen and (min-width: 1560px) {
	}
`;
