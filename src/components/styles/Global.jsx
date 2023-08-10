import { createGlobalStyle } from "styled-components";
import KrylonFont from "../../static/fonts/Krylon-Regular.otf";

import "locomotive-scroll/dist/locomotive-scroll.css";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');
    
    @font-face {
		font-family: "Krylon";
		src: url(${KrylonFont}) format("opentype");
		font-weight: 400;
	}
    * {
        margin: 0;
        padding: 0;
        font-family: 'Krylon', sans-serif;
        box-sizing: border-box;
        // cursor: none !important;
    }

    a{
        color : ${props => props.theme.textColor};
        text-decoration: none;
        width: fit-content;
        display: block;
    }

    body{
        color: ${props => props.theme.textColor};
        transition: none;
    }
`;

export default GlobalStyles;
