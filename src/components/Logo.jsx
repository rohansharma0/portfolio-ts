import { Link } from "react-router-dom";

import { StyledLogo } from "./styles/Logo.styled"

const Logo = () => {
    return (
        <StyledLogo>
            <Link to="/">
                <svg
                    width="432"
                    height="111"
                    viewBox="0 0 432 111"
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M51.908 109.992L31.748 72.5519H28.724V109.992H0.5V8.47193H44.996C53.156 8.47193 60.068 9.91193 65.732 12.7919C71.396 15.5759 75.668 19.4639 78.548 24.4559C81.428 29.3519 82.868 34.8719 82.868 41.0159C82.868 47.9279 80.948 54.0239 77.108 59.3039C73.364 64.4879 67.844 68.1839 60.548 70.3919L83.444 109.992H51.908ZM28.724 53.2559H42.692C46.532 53.2559 49.412 52.3439 51.332 50.5199C53.252 48.6959 54.212 46.0559 54.212 42.5999C54.212 39.3359 53.204 36.7919 51.188 34.9679C49.268 33.0479 46.436 32.0879 42.692 32.0879H28.724V53.2559Z" />
                    <path d="M122.851 111C114.787 111 107.539 109.32 101.107 105.96C94.7712 102.6 89.7792 97.7999 86.1312 91.5599C82.4832 85.3199 80.6592 77.9759 80.6592 69.5279C80.6592 61.1759 82.4832 53.8799 86.1312 47.6399C89.8752 41.3999 94.9152 36.6 101.251 33.2399C107.683 29.88 114.931 28.2 122.995 28.2C131.059 28.2 138.259 29.88 144.595 33.2399C151.027 36.6 156.067 41.3999 159.715 47.6399C163.459 53.8799 165.331 61.1759 165.331 69.5279C165.331 77.8799 163.459 85.2239 159.715 91.5599C156.067 97.7999 151.027 102.6 144.595 105.96C138.163 109.32 130.915 111 122.851 111ZM122.851 86.5199C126.787 86.5199 130.051 85.0799 132.643 82.1999C135.331 79.2239 136.675 74.9999 136.675 69.5279C136.675 64.0559 135.331 59.88 132.643 57C130.051 54.12 126.835 52.68 122.995 52.68C119.155 52.68 115.939 54.12 113.347 57C110.755 59.88 109.459 64.0559 109.459 69.5279C109.459 75.0959 110.707 79.3199 113.203 82.1999C115.699 85.0799 118.915 86.5199 122.851 86.5199Z" />
                    <path d="M221.742 28.4879C230.958 28.4879 238.254 31.6079 243.63 37.8479C249.102 43.9919 251.838 52.3439 251.838 62.9039V109.992H223.614V66.6479C223.614 62.0399 222.414 58.4399 220.014 55.8479C217.614 53.1599 214.398 51.8159 210.366 51.8159C206.142 51.8159 202.83 53.1599 200.43 55.8479C198.03 58.4399 196.83 62.0399 196.83 66.6479V109.992H168.606V24.456L196.83 0.0159912V40.7279C199.326 37.0799 202.686 34.1519 206.91 31.9439C211.23 29.6399 216.174 28.4879 221.742 28.4879Z" />
                    <path d="M256.813 69.5279C256.813 61.1759 258.301 53.8799 261.277 47.6399C264.349 41.3999 268.477 36.6 273.661 33.2399C278.941 29.88 284.797 28.2 291.229 28.2C296.797 28.2 301.597 29.304 305.629 31.512C309.661 33.72 312.781 36.696 314.989 40.44V29.208H343.213V109.992H314.989V98.7599C312.781 102.504 309.613 105.48 305.485 107.688C301.453 109.896 296.701 111 291.229 111C284.797 111 278.941 109.32 273.661 105.96C268.477 102.6 264.349 97.7999 261.277 91.5599C258.301 85.2239 256.813 77.8799 256.813 69.5279ZM314.989 69.5279C314.989 64.3439 313.549 60.264 310.669 57.288C307.885 54.312 304.429 52.824 300.301 52.824C296.077 52.824 292.573 54.312 289.789 57.288C287.005 60.168 285.613 64.2479 285.613 69.5279C285.613 74.7119 287.005 78.8399 289.789 81.9119C292.573 84.8879 296.077 86.3759 300.301 86.3759C304.429 86.3759 307.885 84.8879 310.669 81.9119C313.549 78.9359 314.989 74.8079 314.989 69.5279Z" />
                    <path d="M401.116 28.4879C410.428 28.4879 417.82 31.608 423.292 37.8479C428.764 43.992 431.5 52.344 431.5 62.904V109.992H403.276V66.6479C403.276 62.04 402.076 58.44 399.676 55.848C397.276 53.16 394.06 51.816 390.028 51.816C385.804 51.816 382.492 53.16 380.092 55.848C377.692 58.44 376.492 62.04 376.492 66.6479V109.992H348.268V29.208H376.492V40.7279C378.988 37.0799 382.348 34.152 386.572 31.944C390.796 29.64 395.644 28.4879 401.116 28.4879Z" />
                </svg>
            </Link>
        </StyledLogo>
    );
};

export default Logo;
