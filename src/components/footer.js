import { Link } from "gatsby"
import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import News from "./news/news"
// import { useI18next } from 'gatsby-plugin-react-i18next'
import { Image } from './Images'
import { media } from './Styles'

import styled from "styled-components"
import Form from "./FormCasa"

import logo from "../images/misc/Logo-Silver.svg"
import face from "../images/homeMenu/facebook-logo.svg"
import insta from "../images/homeMenu/instagram-logo.svg"
import tube from "../images/homeMenu/youtube-symbol.svg"
import linked from "../images/homeMenu/linked.svg"
import pt2020 from "../images/pt2020w.png"

const Footer = ({ form, hideForm }) => {
//   const {language} = useI18next()

  return (  
    <>   
        {!hideForm && 
            <Form data={form}/>
        }
        <StyledFooter>
            {/* {!newsPage &&
                <>
                    <div className='title' style={{ margin: '0 0 0 7.3%' }}>
                        <h1 style={{ textAlign: 'center', margin: '3rem' }}>{language === 'pt' ? 'ÚLTIMAS NOTÍCIAS' : 'LAST NEWS'}</h1>
                    </div>
                    
                    <News
                        data={news}
                    />
                    <div className="divider" style={{ height: "4rem" }}></div>
                </>
            } */}

            <div className='footer'>
                <div className='logo-social' id='logo-social'>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Ponto Urbano" />
                        </Link>
                    </div>
                    <div className='social'>
                        <span>Siga-nos em: </span>
                        <div className='social-icons'>
                            <a href="https://www.facebook.com/pontourbano.consultores/">
                                <img src={face} alt="Facebook"/>
                            </a>
                            <a href="https://www.instagram.com/pontourbanoportugal/">
                                <img src={insta} alt="Instagram"/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCYSiA12IkpSrKKiuUm-tCOA">
                                <img src={tube} alt="Youtube"/>
                            </a>
                            <a href="https://www.linkedin.com/company/pontourbano-consultores">
                                <img src={linked} alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='pt2020' id='pt2020'>
                    <a href="/Ponto_Urbano-Ficha_projeto.pdf" target="_blank" rel="nofollow">
                        <img src={pt2020} alt="PT2020" />
                    </a>
                </div>
                <div className="contacts" id='contacts'>
                    <div className='address'>
                        <p>
                            Rua da Paz nº 192 (Espaço BIZ)<br/>
                            Quinta do Loureiro<br/>
                            3800-587 Cacia,<br/>
                            Aveiro - PT
                        </p>
                    </div>
                    <div className='email-number'>
                        <a href="mailto:geral@pontourbano.pt">
                            <p>geral@pontourbano.pt</p>
                        </a>
                        <a href="tel:+351234249468">
                            <p>+351 234 249 468</p>
                        </a>
                    </div> 
                </div>
                <div className="livro-reclamacoes" id='livro-reclamacoes'>
                    <a href="https://livroreclamacoes.pt/inicio" target="_blank" rel="noreferrer noopener">
                        <Image src='icon_livro_reclamacoes_cinzapu.png' alt='Livro de Reclamações'/>
                    </a>                
                </div>
            </div>

            <div className='bottom-footer'>
                <a href="https://invisual.pt" target='_blank' rel="noreferrer">
                    <p>Created: Invisual.pt</p>
                </a>
            </div>     
        </StyledFooter>
    </>
  )
}

export default Footer

const StyledFooter = styled.footer`
    background-color: #030303;
    color: #c1c5c8;
    padding: clamp(50px, 10vw, 90px) 7.3%;
    text-transform:uppercase;
    font-size:0.8rem;
    letter-spacing:0.1rem;
    line-height:1.3rem;

    .footer{
        display: flex;
        justify-content: space-between;
        align-items:center;
        gap: 3%;

        ${media.xxl`
            #logo-social{
                grid-area:logo
            }
            #pt2020{
                grid-area:pt2020
            }
            #contacts{
                grid-area:contacts
            }
            #livro-reclamacoes{
                grid-area:livro
            }

            display:grid;
            grid-template-areas:'logo contacts''pt2020 livro';
            grid-template-columns:repeat(2,1fr);
            gap: 3rem 3%;
        `}

        ${media.m`
            grid-template-areas:'logo' 'contacts''pt2020' 'livro';
            grid-template-columns:1fr;
        `}

        .logo-social{
            .logo{
                img{
                    max-width:300px;
                    width:100%;
                }
            }

            .social{
                margin-top:1.5rem;

                .social-icons{
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    margin-top:1rem;

                    a{
                        display:flex;

                        img{
                            width:20px;
                            height:20px;
                        }
                    }
                }     
            }
        }

        .pt2020{
            img{
                max-width:350px;
                width:100%;
            }
        }

        .livro-reclamacoes{
            .image{
                width:150px;
                margin-left:auto;

                ${media.m`
                    margin-left:unset;
                `}
            }
        }

        .contacts{
            text-align:right;

            ${media.m`
                text-align:left;
            `}

            .email-number{
                margin-top:1rem;

                a{
                    margin-left:auto;

                    ${media.m`
                        margin-left:unset;
                    `}
                }
            }
        }
    }  
    
    .bottom-footer{
        padding-top: clamp(20px, 5vw, 30px);
        display: flex;
        justify-content: flex-end;

        ${media.m`
            justify-content: flex-start;
        `}
    }
`