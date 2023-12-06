import React from "react"
import styled from "styled-components"
import { media } from './Styles'
import { Image } from './Images'

const Video = ({ data, shadow }) => (
    <StyledVideo shadow={shadow}>
        <div className='image-container'>
            <Image
                src={data.image}
                alt={data.alt}
            /> 
        </div>
    </StyledVideo>
)

export default Video

const StyledVideo = styled.div`
    margin: 0 7.3%;
    padding: clamp(50px,10vw,90px) 7.3%;

    ${media.l`
        margin:0;
    `}

    .image-container{
        position:relative;
        max-width: 1000px;
        margin: 0 auto;

        .image{
            width:100%;
        }

        ${props => props.shadow && `
            ::before{
                content: '';
                position: absolute;
                width: 40%;
                height: 60%;
                background: #2c2c2c;
                bottom: -9%;
                left: -6%;
                z-index: -1;
            }`
        }        
    }
`
