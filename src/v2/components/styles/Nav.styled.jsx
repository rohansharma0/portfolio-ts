import { styled } from "styled-components";

export const StyledNav = styled.nav`
    ul{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        li{
            list-style-type: none;
            
            a{
                text-transform: uppercase;
                line-height: 1;
                padding: 0.25rem 0;
                font-size: 0.825rem;
                font-weight: 600;
            }
        }
    }
`