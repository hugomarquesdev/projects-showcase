import React, { useState } from "react"
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { media } from '../Styles'

import Panel from "./panel"

import styled from "styled-components"
import Div100vh from "react-div-100vh"

// import menu from "../../images/nav/menu-btn-white.svg"
import menuB from "../../images/nav/menu-btn-black.svg"
import close from "../../images/nav/close-btn.svg"

import face from "../../images/homeMenu/facebook-logo.svg"
import faceB from "../../images/homeMenu/facebook-logo-black.svg"
import insta from "../../images/homeMenu/instagram-logo.svg"
import instaB from "../../images/homeMenu/instagram-logo-black.svg"
import tube from "../../images/homeMenu/youtube-symbol.svg"
import tubeB from "../../images/homeMenu/youtube-symbol-black.svg"
import linked from "../../images/homeMenu/linked.svg"
import linkedB from "../../images/homeMenu/linked-black.svg"

// Images - Mobile Navbar
import LogoBlack from "../../images/nav/QuadradoPreto.svg"
import LogoWhite from "../../images/nav/QuadradoBranco.svg"

import LangSwap from "./langSwap"

const SideBar = ({ content, news, projetosPortfolio, projetosVenda }) => {
    const breakpoints = useBreakpoint()
    const [open, setOpen] = useState(false)

    return (
        <StyledBar id="sidebar">
            <Div100vh className="sideLogo">
                <button className="hambLogo" onClick={() => setOpen(!open)}>
                    <div className="menuImgCont">
                        <img src={open ? close : menuB} className="menu" alt="menu" id="menuIcon" />
                    </div>
                    <div className='menu-txt' style={open ? {color:'#fff'} : {}}>
                        <span>{open ? 'Fechar' : 'Menu'}</span>
                    </div>
                </button>
                <Link to='/' className='logo'>
                    <img src={open ? LogoWhite : LogoBlack} className="logo-image" alt="Ponto Urbano"/>
                </Link>
                <div className="social">
                    {!news && // IF INSIDE A NEWS, DON'T SHOW LANG SWITCHER
                        <LangSwap open={open}/>
                    }

                    <a href="https://www.facebook.com/pontourbano.consultores/">
                        <img src={open ? face : faceB} alt="face" id="faceIcon" className="socialImgs socialImgs-face"/>
                    </a>
                    <a href="https://www.instagram.com/pontourbanoportugal/">
                        <img src={open ? insta : instaB} alt="insta" id="instaIcon" className="socialImgs"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCYSiA12IkpSrKKiuUm-tCOA">
                        <img src={open ? tube : tubeB} alt="tube" id="tubeIcon" className="socialImgs"/>
                    </a>
                    <a href="https://www.linkedin.com/company/pontourbano-consultores">
                        <img src={open ? linked : linkedB} alt="linked" id="linkedIcon" className="socialImgs"/>
                    </a>
                </div>
            </Div100vh>

            {/* MOBILE */}
            <div className="navbar__mobile black">
                <Link to="/" className="logo-container">
                    <img src={open ? LogoWhite : LogoBlack} alt="Logo Preto" />
                </Link>
                <button className="logo-container-2" style={open ? {color:'#fff'} : {}} onClick={() => setOpen(!open)}>
                    <span>{open ? 'Fechar' : 'Menu'}</span>
                </button>
            </div>
            {/*  */}


            {/* OPEN MENU */}
            <CSSTransition in={open} timeout={300} classNames={breakpoints.mobile ? 'panel-animation-top' : 'panel-animation-left'} unmountOnExit>
                <Panel 
                    open={open}
                    news={news} 
                    content={content}
                    projetosPortfolio={projetosPortfolio}
                    projetosVenda={projetosVenda}
                />
            </CSSTransition>
        </StyledBar>
    )
}

export default SideBar

const StyledBar = styled.div`
    position: fixed;
    z-index: 51;

    .sideLogo {
        width: 7.3%;
        z-index: 56;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        padding:2.5rem 0;
    }

    .hambLogo {
        -webkit-transition: width 0.2s; /* Safari prior 6.1 */
        transition: width 0.2s;

        .menuImgCont {
            width: 100%;

            .menu {
                width: 2vw;
                max-height: 20px;
                height: auto;
            }
        }

        .menu-txt{
            transform:rotate(-90deg);
            margin-top:2rem;
            text-transform:uppercase;

            span{
                font-family:'Montserrat', serif;
                font-weight:500;
            }
        }
    }

    .social {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:1.5rem;
        
        .lang-swap{
            text-transform: uppercase;
        }
        
        a {            
            .socialImgs {
                width: 1vw;
            }
            .socialImgs-face {
                width: 0.6vw;
            }

            @media screen and (max-width: 2300px) {
                .socialImgs {
                    width: 0.9vw;
                }
                
                .socialImgs-face {
                    width: 0.5vw;
                }
            }

            @media screen and (max-width: 1440px) {
                .socialImgs {
                    width: 1.2vw;
                }
                
                .socialImgs-face {
                    width: 0.7vw;
                }
            }

            @media screen and (max-width: 1150px) {
                .socialImgs {
                    width: 1.4vw;
                }
                
                .socialImgs-face {
                    width: 0.8vw;
                }
            }
        }
    }

    .navbar__mobile {
        display: none;
    }

    ${media.m`
        width: 100%;
        position: absolute;
        
        .sideLogo {
            display: none;
        }
        
        .navbar__mobile {
            display: grid;
            grid-template-columns: 1fr 1fr;
            position: absolute;
            width: 100%;
            height: auto;
            border-bottom: 1px solid #1d252c;
            background: none;
            z-index: 55;
        }
        
        .logo-container {
            width: 65%;
            height: fit-content;
            line-height: 0;
            
            img {
                height: auto;
                width: 10vw;
            }
        }

        .logo-container-2 {
            width: 20%;
            margin-right: 15%;
            justify-self: right;
            
            span{
                font-family:'Montserrat', serif;
                font-weight:500;
                text-transform:uppercase;
            }
        }
    `}

    ${media.s`
        .sideLogo {
            display: none;
        }

        .logo-container {
            width: 90%;
        }

        .logo-container-2 {
            width: 30%;
        }
    `}

    // MENU ANIMATIONS
    .panel-animation-left-enter {
        opacity: 0;
        transform:translateX(-100%);
    }
    .panel-animation-left-enter-active {
        opacity: 1;
        transform:translateX(0);
        transition: opacity 100ms, transform 300ms;
    }
    .panel-animation-left-exit {
        opacity: 1;
        transform:translateX(0);
    }
    .panel-animation-left-exit-active {
        opacity: 0;
        transform:translateX(-100%);
        transition: opacity 100ms, transform 300ms;
    }


    .panel-animation-top-enter {
        opacity: 0;
        transform:translateY(-100%);
    }
    .panel-animation-top-enter-active {
        opacity: 1;
        transform:translateY(0);
        transition: opacity 100ms, transform 300ms;
    }
    .panel-animation-top-exit {
        opacity: 1;
        transform:translateY(0);
    }
    .panel-animation-top-exit-active {
        opacity: 0;
        transform:translateY(-100%);
        transition: opacity 100ms, transform 300ms;
    }
`
