import styled from "styled-components";
import noiseImg from "../../static/img/noise.png";

export const StyledBackground = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${props => props.theme.backgroundColor};
	z-index: -2;

	.noise {
		position: fixed;
		z-index: 9999;
		top: -300%;
		left: -150%;
		height: 600%;
		opacity: 0.12;
		width: 600%;
		background-image: url(${noiseImg});
		background-size: 200px;
		background-repeat: repeat;
		pointer-events: none;
		animation: grain 7s steps(10) infinite;

		@-webkit-keyframes grain {
			0%,
			to {
				transform: translate(0);
			}
			10% {
				transform: translate(-5%, -10%);
			}
			20% {
				transform: translate(-15%, 5%);
			}
			30% {
				transform: translate(7%, -25%);
			}
			40% {
				transform: translate(-5%, 25%);
			}
			50% {
				transform: translate(-15%, 10%);
			}
			60% {
				transform: translate(15%);
			}
			70% {
				transform: translateY(15%);
			}
			80% {
				transform: translate(3%, 35%);
			}
			90% {
				transform: translate(-10%, 10%);
			}
		}
		@keyframes grain {
			0%,
			to {
				transform: translate(0);
			}
			10% {
				transform: translate(-5%, -10%);
			}
			20% {
				transform: translate(-15%, 5%);
			}
			30% {
				transform: translate(7%, -25%);
			}
			40% {
				transform: translate(-5%, 25%);
			}
			50% {
				transform: translate(-15%, 10%);
			}
			60% {
				transform: translate(15%);
			}
			70% {
				transform: translateY(15%);
			}
			80% {
				transform: translate(3%, 35%);
			}
			90% {
				transform: translate(-10%, 10%);
			}
		}
	}
`;