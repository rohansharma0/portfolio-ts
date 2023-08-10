import { styled } from "styled-components";

export const StyledFooter = styled.footer`

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.25rem;
    justify-content: flex-end;
    display: flex;
    align-items: flex-end;
    background: linear-gradient(00deg, rgb(0 0 0 / 35%) 0%, rgba(255,255,255,0) 100%);

    .footer-links{
        display: none;
        ul{
            list-style-type: none;
            li{
                margin-top:1rem;
                a{
                    img{

                    }
                }
            }
        }
    }

    .scroll-progress{
        width: 2.5rem;
        height: 2.5rem;
        border: 2px solid #2f3034;
        border-radius: 50%;
    }

    
    @media only screen and (min-width: 600px) {
	}

    @media only screen and (min-width: 950px) {
	}

    @media only screen and (min-width: 1200px) {
        justify-content:space-between;
        padding: 0 4rem 5rem 4rem;
        .footer-links{
            display: block;
        }
        
        .scroll-progress{
            width: 3rem;
            height: 3rem;
        }
            
	}
`