import { styled } from "styled-components";

export const StyledThemeSwitch = styled.div`

    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;

    .moon-solid {
        color: ${props => props.theme.iconColor};
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: currentColor;

        &::before{
            content: '';
            position: absolute;
            left: 6px;
            top: 1px;
            width: 12px;
            color: ${props => props.theme.secondaryColor};
            background-color: ${props => props.theme.secondaryColor};
            height: 12px;
            border-radius: 50%;
            border-top: solid 1px transparent;
            border-bottom: solid 1px currentColor;
            border-left: solid 1px currentColor;
            border-right: solid 1px transparent;
            -webkit-transform: rotate(45deg);
                  transform: rotate(45deg);
        }
    }

    .sun {
        color:${props => props.theme.iconColor};
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid currentColor;
        box-shadow: -8px 0 0 -4px currentColor,
                    8px 0 0 -4px currentColor, 
                    0 -8px 0 -4px currentColor,
                    0 8px 0 -4px currentColor,
                    -6px -6px 0 -4px currentColor,
                    -6px 6px 0 -4px currentColor,
                    6px -6px 0 -4px currentColor,
                    6px 6px 0 -4px currentColor;
    }
    
  
`