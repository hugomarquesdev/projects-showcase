import React, { useState } from "react"
import { Link } from "gatsby"
import { Image } from './Images'
import { media } from './Styles'
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import more from "../images/nav/more.svg"

const Images = ({ data }) => {
    const breakpoints = useBreakpoint()

    const [projectInfo, setProjectInfo] = useState(false)
    const [projectKey, setProjectKey] = useState(null)

    return (
        <StyledImages>
            <div className='wrapper'>
                {data.map((image, key) => (
                    <Link
                        className='project-wrapper'
                        to={image.link}
                        key={key}
                    >
                        <Image
                            src={image.image}
                            alt={image.alt}
                            onMouseEnter={() => { setProjectInfo(true); setProjectKey(key) }}
                        />
                        {( (projectInfo && projectKey === key) || breakpoints.l ) &&
                            <div className='overlay'
                                onMouseLeave={() => { setProjectInfo(false); setProjectKey(null) }}
                            >
                                <h4 className='city' dangerouslySetInnerHTML={{ __html: image.city }}></h4>
                                <h3 className='project' dangerouslySetInnerHTML={{ __html: image.project }}></h3>
                                <img src={more} alt="More" />
                            </div>
                        }
                    </Link>
                ))}
            </div>
        </StyledImages>
    )
}

export default Images

const StyledImages = styled.div`
    .wrapper{
        display:flex;
        max-width:1600px;
        margin:0 auto;

        ${media.l`
            flex-direction:column;
        `}

        .project-wrapper{
            width:100%;
            position:relative;
            z-index:1;

            .image{
                max-height:80vh;
                z-index:2;

                ${media.l`
                    max-height:35vh;
                `}
            }

            .overlay{
                position:absolute;
                width:100%;
                height:100%;
                top:0;
                left:0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 3rem 5%;
                background-color:#00000080;
                color:#ebebeb;
                text-transform:uppercase;
                z-index:3;

                .city{
                    font-size:1.2rem;
                }

                .project{
                    font-weight:400;
                    font-size:2rem;
                }

                img{
                    max-width:45px; 
                }
            }
        }
    } 
`
