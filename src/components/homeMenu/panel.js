import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { media } from '../Styles'
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Submenu from './submenu'
import LangSwap from "./langSwap"

import face from "../../images/homeMenu/facebook-logo.svg"
import insta from "../../images/homeMenu/instagram-logo.svg"
import tube from "../../images/homeMenu/youtube-symbol.svg"
import linked from "../../images/homeMenu/linked.svg"


const Panel = ({ content, news, projetosPortfolio, projetosVenda, open }) => {
    const breakpoints = useBreakpoint()
    const [openSubmenu, setOpenSubmenu] = useState(false)

    return(
        <StyledPanel id="sidePanel" openSubmenu={openSubmenu}>
            <div className="links">
                {content.map((sidebar, key) => (
                    <Link to={sidebar.link} className="underline" key={key} onMouseEnter={() => setOpenSubmenu(sidebar.submenu === true ? true : false)}>
                        {sidebar.text}
                    </Link>
                ))}
            </div>

            {/* SUBMENU  */}
            {(!breakpoints.mobile && openSubmenu) &&
                <Submenu
                    projetosVenda={projetosVenda}
                    projetosPortfolio={projetosPortfolio}
                />
            }            

            {/* MOBILE  */}
            {breakpoints.mobile &&
                <div className="social-mobile">
                    {!news && // IF INSIDE A NEWS, DON'T SHOW LANG SWITCHER
                        <div className="lang-mobile">
                            <LangSwap open={open}/>
                        </div>
                    }
                    <a href="https://www.facebook.com/pontourbano.consultores/" className="social-links">
                        <img src={face} alt="face" id="faceIcon" />
                    </a>
                    <a href="https://www.instagram.com/pontourbanoportugal/" className="social-links">
                        <img src={insta} alt="insta" id="instaIcon" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCYSiA12IkpSrKKiuUm-tCOA" className="social-links">
                        <img src={tube} alt="tube" id="tubeIcon" />
                    </a>
                    <a href="https://www.linkedin.com/company/pontourbano-consultores" className="social-links">
                        <img src={linked} alt="linked" id="linkedIcon" />
                    </a>
                </div>
            }
        </StyledPanel>
    )
}


export default Panel

const StyledPanel = styled.div`
    position: fixed;
    top: 0;
    left:0;
    z-index: 50;
    height: 100%;
    background-color: #2c2c2c;
    overflow: hidden;
    transition: 0.5s;
    display: flex;
    align-items:center;
    padding: 0 5% 0 10%;
    width: ${props => props.openSubmenu && '100%'};

    ${media.m`
        width:100%;
    `}


    .links {
        height: 100%;
        position: relative;
        display: flex;
        flex-direction:column;
        justify-content:center;
        gap:2rem;
        
        a, button {
            text-decoration: none;
            font-size: 3rem;
            color: #fff;
            transition: 0.1s;
            font-weight:400;
            white-space: nowrap;

            ${media.xl`
                font-size:2.5rem;
            `}
        }

        a:hover {
            color: #c1c5c8;
        }

        button {
            font-family: inherit;
        }        
    }

    ${media.xl`
        .links span a,
        .links span button {
            font-size: 3.5rem;
        }
    `}

    ${media.m`
        top: 0;
        left: 0;

        .links {
            height: fit-content;
        }

        .links span a,
        .links span button {
            font-size: 4rem;
        }
        
        .social-mobile {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 2.5rem;
            right: 1rem;
            
            .lang-mobile{
                position: absolute;
                right: 0;
                top: -100%;
            }
            
            .social-links {
                margin: 0 0.8rem;
                
                img {
                    width: auto;
                    height: 1rem;
                    margin: 0.5rem auto;
                }
            }
        }
    `}

    @media screen and (min-width: 501px) and (max-width: 767px) {
        .links span a,
        .links span button {
            font-size: calc(2.5rem + 24 * (100vw - 501px) / (767 - 501));
        }
    }

    ${media.s`
        .links {
            height: fit-content;
        }
        
        .links span a,
        .links span button {
            font-size: 1.8rem;
        }
    `}
`
