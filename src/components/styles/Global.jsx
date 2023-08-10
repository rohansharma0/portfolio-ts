import { createGlobalStyle } from "styled-components";
import KrylonFont from "../../static/fonts/Krylon-Regular.otf";
import ITCAvantGardeStdXLt from "../../static/fonts/ITCAvantGardeStd-XLt.otf"; // 100
import ITCAvantGardeStdBk from "../../static/fonts/ITCAvantGardeStd-Bk.otf"; // 200
import ITCAvantGardeStdMd from "../../static/fonts/ITCAvantGardeStd-Md.otf"; // 400
import ITCAvantGardeStdDemi from "../../static/fonts/ITCAvantGardeStd-Demi.otf"; // 600
import ITCAvantGardeStdBold from "../../static/fonts/ITCAvantGardeStd-Bold.otf"; // 800

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');
    
    @font-face {
		font-family: "Krylon";
		src: url(${KrylonFont}) format("opentype");
		font-weight: 400;
	}
    @font-face {
		font-family: "Avant Garde";
		src: url(${ITCAvantGardeStdXLt}) format("opentype");
		font-weight: 100;
	}

    @font-face {
		font-family: "Avant Garde";
		src: url(${ITCAvantGardeStdBk}) format("opentype");
		font-weight: 200;
	}

    @font-face {
		font-family: "Avant Garde";
		src: url(${ITCAvantGardeStdMd}) format("opentype");
		font-weight: 400;
	}
    @font-face {
		font-family: "Avant Garde";
		src: url(${ITCAvantGardeStdDemi}) format("opentype");
		font-weight: 600;
	}
    @font-face {
		font-family: "Avant Garde";
		src: url(${ITCAvantGardeStdBold}) format("opentype");
		font-weight: 800;
	}
    * {
        margin: 0;
        padding: 0;
        font-family: 'Avant Garde', sans-serif;
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
