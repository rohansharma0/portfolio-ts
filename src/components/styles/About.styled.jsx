import { styled } from "styled-components";

export const StyledAbout = styled.div`
    display: flex;
    height: 70vh;
    margin: 0 1.5rem;
    flex-direction: column-reverse;
    justify-content: space-between;

    .left-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title{
            p{
                font-size: 5rem;
                font-weight: 600;
                letter-spacing: 3px;
                line-height: 4.5rem;
                span{
                    color : #4be947;
                }
            }
        }
        .info{
            margin: 2rem 0 0 0;
            p{
                color: #78809e;
                font-size: 1.1rem;
                line-height: 1.3rem;
            }
        }
        
    }

    .image-section{
        height:45%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: bottom;
            border-top-left-radius: 4rem;
            // mix-blend-mode: luminosity;
        
        }
    }

    .links{
        height: 15vh;
        position: absolute;
        bottom: 0;
        left: 1.5rem;
        display: flex;
        ul{
            display: flex;
            align-items: center;
            
            li{
                margin-right: 1rem;
                list-style-type: none;
                a{
                    font-size: 0.9rem;
                    color: ${props => props.theme.textColor};
                }
            }
        }
    }

    @media only screen and (min-width: 600px) {
		
	}

    /* Large devices (laptops/desktops, 950px and up) */
	@media only screen and (min-width: 950px) {
        height: 85vh;
        padding: 0 0 15vh 0;
        margin: 0 40vw 0 10vw;
        justify-content: center;
    
        .left-section{
            margin-right: 5vw;
            .title{
                p{
                    font-size: 6rem;
                    letter-spacing: 1px;
                    line-height: 5rem;
                }
            }
            .info{
                margin: 2rem 0 0 0;
                p{
                    color: #78809e;
                    font-size: 1.2rem;
                    line-height: 1.6rem;
                }
            }
            
        }
    
        .image-section{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 40vw;
            height: 85vh;
    
            img{
                position: absolute;
                // mix-blend-mode: luminosity;
            
            }
        }
    
        .links{
            left: 2.5rem;
            ul{ 
                li{
                    a{
                        font-size: 1rem;
                    }
                }
            }
        }
	}

    

	@media only screen and (min-width: 1200px) {
        margin: 0 30rem 0 15vw;
        .left-section{
            margin-right: 15vw;
            .title{
                p{
                    font-size: 8rem;
                    letter-spacing: 4px;
                    line-height: 7rem;
                }
            }
            .info{
                margin: 2rem 0 0 0;
                width:90%;
                p{
                    font-size: 1.3rem;
                }
            }
            
        }
    
        .image-section{
            width: 30rem;
        }
    }
`

