import React from "react"
import styled from "styled-components"
import { media } from './Styles'
import { Image } from './Images'

const Info = ({ data }) => (
    <StyledInfo>
        <div className='wrapper'>
            <div className='top'>
                <div className='title'>
                    <h3>{data.title}</h3>
                </div>
                <div className='image-container'>
                    <Image
                        src={data.image1}
                        alt={data.alt1}
                    />
                </div>
            </div>
            <div className='bottom'>
                <div className='image-container'>
                    <Image
                        src={data.image2}
                        alt={data.alt2}
                    />
                </div>
                <div className='text'>
                    <p>{data.text}</p>
                </div>
            </div>
        </div>
    </StyledInfo>
)

export default Info

const StyledInfo = styled.div`
    margin: 0 7.3%;
    padding: clamp(50px,10vw,90px) 7.3%;
    display: flex;
    flex-direction: column;

    ${media.l`
        margin:0;
    `}

    .wrapper{
        margin:0 auto;
        max-width:1400px;
    }

    .top{
        display: flex;

        ${media.xl`
            flex-direction:column;
        `}

        .title {
            text-align:right;
            width:40%;
            padding: 1rem 5%;
            display: flex;
            align-items: center;

            ${media.xl`
                width:100%;
                text-align:center;
                margin:3rem 0;
                padding:0;
            `}

            h3{
                font-weight:700;
                font-size: 1.5rem;
                margin-bottom: 5rem;

                ${media.xl`
                    margin-bottom: 0;
                `}   
            }
        }

        .image-container{
            width:60%;

            ${media.xl`
                width:100%;
            `}

            .image{
                height:100%;
                max-height:80vh;
            }
        }
    }

    .bottom{
        display: flex;
        margin-top:-5rem;

        ${media.xl`
            margin-top:0;
            flex-direction:column-reverse;
        `}

        .text{
            width:45%;
            padding: 0 5%;
            display: flex;
            align-items: end;

            ${media.xl`
                width:100%;
                margin:3rem 0;
                padding:0;
                text-align:center;
            `}

            p{
                font-size:1.5rem;
                margin-top:5rem;
            }
        }

        .image-container{
            width:55%;

            ${media.xl`
                width:100%;
            `}

            .image{
                height:100%;
                max-height:80vh;
            }
        }       
    }

    .image-container{
        position:relative;
        margin: 0 auto;
        width:100%;

        .image{
            width:100%;
        }       
    }
`
