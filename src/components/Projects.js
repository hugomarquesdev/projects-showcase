import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Image } from './Images'
import { media } from './Styles'
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import styled from "styled-components"

import more from "../images/nav/more-black.svg"

const Projetos = ({ data, filters, venda, portfolio }) => {
    const breakpoints = useBreakpoint()
    const [itemsToShow, setItemsToShow] = useState(6)
    const [selectedCity, setSelectedCity] = useState(null)
    const [projectInfo, setProjectInfo] = useState(false)
    const [projectKey, setProjectKey] = useState(null)
    const [project, setProject] = useState(data)

    // FILTER PROJECT TYPE: VENDA / PORTFOLIO
    useEffect(() => (
        venda ?
            setProject(data.filter(project => project.venda === venda))
        : portfolio ?
            setProject(data.filter(project => project.portfolio === portfolio))
        :
            setProject(data)
    ),[data])

    // CREATE AN ARRAY WITH ALL PROJECT CITIES
    let cities = []
    project.map(project => cities.push(project.city))

    // DELETE DUPLICATED CITIES
    let citiesFiltered = [...new Set(cities)]   
    
    return (
        <StyledProjetos>
            {filters &&
                <div className='filters'>
                    {citiesFiltered.slice(0, 4).map((city, key) => (
                        <div 
                            className={'button-container' + (selectedCity === city ? ' selected' : '')}
                            onClick={() => setSelectedCity(city)}
                            key={key}
                        >
                            <button>
                                {city}
                            </button>
                        </div>
                    ))}
                     <div 
                        className={'button-container' + (selectedCity === null ? ' selected' : '')}
                        onClick={() => setSelectedCity(null)}
                    >
                        <button>
                            Todos
                        </button>
                    </div>
                </div>
            }
            <div className='projects'>
                {project.slice(0, itemsToShow).map((itemData, i) => (
                    selectedCity === itemData.city ?
                        <Link
                            to={itemData.link}
                            key={"projeto" + i}
                            className="item"
                            id={"project" + i}
                        >
                            <Image
                                src={itemData.image}
                                className='fefe'
                                style={{ height: `100%` }}
                                onMouseEnter={() => { setProjectInfo(true); setProjectKey(i) }}
                            />
                            {( (projectInfo && projectKey === i) || breakpoints.l ) &&
                                <div 
                                    className="cardContent"
                                    onMouseLeave={() => { setProjectInfo(false); setProjectKey(null) }}
                                >
                                    <h3>{itemData.title}</h3>
                                    <img src={more} alt="More" />
                                </div>
                            }
                        </Link>
                    : selectedCity === null &&
                        <Link
                            to={itemData.link}
                            key={"projeto" + i}
                            className="item"
                            id={"project" + i}
                        >
                            <Image
                                src={itemData.image}
                                className='fefe'
                                style={{ height: `100%` }}
                                onMouseEnter={() => { setProjectInfo(true); setProjectKey(i) }}
                            />
                            {( (projectInfo && projectKey === i) || breakpoints.l ) &&
                                <div 
                                    className="cardContent"
                                    onMouseLeave={() => { setProjectInfo(false); setProjectKey(null) }}
                                >
                                    <h3>{itemData.title}</h3>
                                    <img src={more} alt="More" />
                                </div>
                            } 
                        </Link>
                ))}
            </div>
            {itemsToShow < project.length && // ONLY SHOW BUTTON WHEN THERE ARE MORE ITEMS TO SHOW
                <div className='more'>
                    <button onClick={() => setItemsToShow(itemsToShow + 4)}>
                        <img src={more} alt="More" />
                    </button>
                </div>
            }
        </StyledProjetos>
    )
}

export default Projetos

const StyledProjetos = styled.div`
    position:relative;
    padding: clamp(50px,10vw,90px) 0;

    .filters{
        margin: 0 7.3%;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        background-color:#ebebeb;

        ${media.m`
            grid-template-columns: repeat(2,1fr);
        `}

        .button-container{
            display:flex;
            
            button{
                font-family:'Montserrat', serif;
                font-weight:500;
                text-transform:uppercase;
                font-size:1.2rem;
                width: 100%;
                padding: 2rem 5%;
            }

            :hover{
                background-color:#3b3b3b;
                color:#ebebeb;
            }
        } 
        
        .selected{
            background-color:#3b3b3b;
            color:#ebebeb;
        }
    }

    .projects{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 5rem 5%;
        margin: 0 7.3%;
        padding: clamp(50px,10vw,90px) 0;

        ${media.m`
            margin: unset;
            padding: clamp(50px,10vw,50px) 7.3%;
            gap: 2.5rem 5%;
        `}

        ${media.s`
            grid-template-columns: 1fr;
        `}

        .item {
            position: relative;
            text-transform: uppercase;
            max-height:50vh;
        }

        .cardContent {
            position:absolute;
            width:100%;
            height:100%;
            top:0;
            left:0;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            gap:2rem;
            background-color: #2c2c2cB3;
            padding: 5%;
            text-align:center;
            color:#fff;

            h3{
                font-weight:600;
                max-width: 500px;
                font-size:1.9rem;

                ${media.xxl`
                    font-size:1.5rem;
                `}

                ${media.xl`
                    font-size:1.2rem;
                `}

                ${media.s`
                    font-size:1rem;
                `}
            }


            img{
                max-width:40px;
            }
        }  
    }

    .more{
        margin: 0 7.3%;

        button{
            margin:0 auto;

            img{
                max-width:45px;
            }
        }        
    }
`
