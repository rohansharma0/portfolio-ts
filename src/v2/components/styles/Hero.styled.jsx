import { styled } from "styled-components";

export const StyledHero = styled.div`

   padding: 12rem 1.25rem 0 1.25rem;
   
   p.about{
    font-size: 3.3rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.25em;

   }
   @media only screen and (min-width: 600px) {
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
