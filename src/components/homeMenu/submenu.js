import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { Image } from '../Images'
import { media } from '../Styles'
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import more from "../../images/nav/more.svg"

const Submenu = ({ projetosPortfolio, projetosVenda }) => {
    const breakpoints = useBreakpoint()
    const [projetos, setProjetos] = useState(projetosVenda)

    return(
        <StyledSubmenu className='submenu'> 
            <div className='filters'>
                <button 
                    onClick={() => setProjetos(projetosVenda)} 
                    style={
                        projetos === projetosVenda ? {
                            backgroundColor: '#ebebeb', color:'rgb(28,36,43)'
                        } : {}
                    }
                >
                        Para Venda
                </button>
                <button 
                    onClick={() => setProjetos(projetosPortfolio)} 
                    style={
                        projetos === projetosPortfolio ? {
                            backgroundColor: '#ebebeb', 
                            color:'rgb(28,36,43)'
                        } : {}
                    }
                >
                    Porfólio
                </button>
            </div>     
            <div className='projects'>
                {projetos.content.slice(0, (breakpoints.l ? 4 : breakpoints.xxl ? 6 : 8 )).map((projeto, key) => (
                    <Link
                        to={projeto.link}
                    >
                        <article className='project' key={key}>
                            <Image 
                                src={projeto.image}
                            />
                            <span className='title'>{projeto.title}</span>
                        </article>
                    </Link>
                ))}
            </div>
            <div className='more'>
                <Link to={ projetos === projetosVenda ? '/projetos-venda' : '/portfolio' }>
                    <img src={more} alt="More"/>
                </Link>
            </div>
        </StyledSubmenu>
    )
}


export default Submenu

const StyledSubmenu = styled.div`
    width:100%;
    padding-left:5%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .filters{
        display:flex;
        justify-content:center;
        gap:5%;

        button{
            display: block;
            background-color: transparent;
            border-width: 0;
            padding: 0;
            cursor: pointer;
            border: 1px solid #ebebeb;
            padding: 0.5rem 2rem;
            text-transform: uppercase;
            transition: all 150ms ease-out;
            color:#ebebeb;
            font-family:'Montserrat', serif;
            font-weight:500;
            font-size:1rem;

            :hover{
                background: #ebebeb;
                color: rgb(28,36,43);
            }
        }
    }

    .projects{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 3rem 5%;

        ${media.xxl`
            grid-template-columns: repeat(3,1fr);
        `}

        ${media.l`
            grid-template-columns: repeat(2,1fr);
        `}

        .project{
            text-align:center;

            .image{
                width:100%;
                height:30vh;
                margin-bottom:1rem;
            }

            .title{
                color:#ebebeb;
                text-transform:uppercase;
            }
        }
    }

    .more{
        display:flex;
        justify-content:center;

        img{
            max-width:45px;
        }
    }
`
