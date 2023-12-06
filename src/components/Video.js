import React from "react"
import styled from "styled-components"
import { media } from './Styles'

const Video = ({ data, poster }) => (
    <StyledVideo>
        <div className='video-container'>
            <video preload="none" className='video' poster={poster} controls autoPlay playsInline loop muted>
                <source src={data} type="video/mp4"></source>
            </video>
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

    .video-container{
        position:relative;

        video{
            width:100%;
        }

        ::before{
            content: '';
            position: absolute;
            width: 40%;
            height: 60%;
            background: #2c2c2c;
            bottom: -9%;
            left: -6%;
            z-index: -1;
        }
    }
`
