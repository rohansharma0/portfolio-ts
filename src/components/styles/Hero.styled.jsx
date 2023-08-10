import { styled } from "styled-components";

export const StyledHero = styled.div`

   padding: 12rem 1.25rem 0 1.25rem;
   
   p.about{
    font-size: 3.3rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.25em;

   }


   //resume-btn
	.resume-btn a {
		margin-top: 3rem;
		color: ${props => props.theme.textColor};;
		font-weight: 800;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 18px;
		width: 100%;
		height: 3rem;
		letter-spacing: 2px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		position: relative;

		&:hover .border-hover1::before,
		&:hover .border-hover1::after,
		&:hover .border-hover2::before,
		&:hover .border-hover2::after {
			transform: scale(1);
		}

		&::before {
			content: "";
			position: absolute;
			top: 0;
			width: 100%;
			height: 1px;
			background-color: ${props => props.theme.textColor};;
			opacity: 0.2;
			transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);
		}

		&::after {
			content: "";
			position: absolute;
			right: 0;
			width: 1px;
			height: 100%;
			background-color: ${props => props.theme.textColor};
			opacity: 0.2;
			transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);
		}

		.border-hover1 {
			position: absolute;
			width: 100%;
			height: 100%;

			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 1px;
				background-color: ${props => props.theme.textColor};
				transform: scale(0);
				transform-origin: right;
				opacity: 1;
				transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);
			}

			&::after {
				content: "";
				position: absolute;
				left: 0;
				width: 1px;
				height: 100%;
				background-color: ${props => props.theme.textColor};
				transform: scale(0);
				transform-origin: bottom;
				opacity: 1;
				transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);
			}
		}
		.border-hover2 {
			position: absolute;
			width: 100%;
			height: 100%;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				width: 100%;
				height: 1px;
				background-color: ${props => props.theme.textColor};
				transform: scale(0);
				transform-origin: left;
				opacity: 1;
				transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);
			}

			&::after {
				content: "";
				position: absolute;
				right: 0;
				width: 1px;
				height: 100%;
				background-color: ${props => props.theme.textColor};
				transform: scale(0);
				transform-origin: top;
				opacity: 1;
				transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);
			}
		}
		.border {
			position: absolute;
			width: 100%;
			height: 100%;
			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 1px;
				background-color: ${props => props.theme.textColor};
				opacity: 0.2;
				transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);
			}

			&::after {
				content: "";
				position: absolute;
				left: 0;
				width: 1px;
				height: 100%;
				background-color: ${props => props.theme.textColor};
				opacity: 0.2;
				transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);
			}
		}
	}
   
   @media only screen and (min-width: 600px) {
      padding: 13rem 2.5rem 0 2.5rem;
      
      .resume-btn a {
         width: 20rem;
         margin-top: 4rem;
      }
   }

   @media only screen and (min-width: 950px) {
	}
   
   @media only screen and (min-width: 1200px) {
      padding: 16rem 17rem 0 17rem;
   
      p.about{
      font-size: 4.8rem;
      }
	}
`;
