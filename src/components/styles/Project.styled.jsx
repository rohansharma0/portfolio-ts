import { styled } from "styled-components";

export const StyledProject = styled.section`
    margin: 5rem 1.25rem;
    position: relative;
    .project-title{
        margin-bottom: 1rem;
        p{
            text-transform: uppercase;
            position: relative;
            &:after{
                content:"";
                left:0;
                bottom:-0.5rem;
                position: absolute;
                width:100%;
                height:1px;
                background-color:white;
            }
        }
    }

    @media only screen and (min-width: 600px) {
        margin: 5rem 2.5rem;
    }

    
    @media only screen and (min-width: 1200px) {
        margin: 5rem 17rem;
        .project-title{
            p{
                font-size:1.2rem;
                width: fit-content;
                &:after{
                    width: 100%;
                }
            }
        }
    }
  
`