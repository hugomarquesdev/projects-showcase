import React from "react"
import { media } from './Styles'
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import ImagesBanner from './ImagesBanner'


const Title = ({ data, images }) => {
    const breakpoints = useBreakpoint()

    return (
        <StyledTitle>
            <div className='header'>
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
            </div>
            <div className='counter-timer'>
                {data.timer.map((timer, key) => (
                    <>
                        <div className='timer' key={key}>
                            <span dangerouslySetInnerHTML={{ __html: timer.counter }}></span>
                            <p dangerouslySetInnerHTML={{ __html: timer.title }}></p>
                        </div>
                        {!breakpoints.xl && <hr />}
                    </>
                ))}
            </div>
            <div className='images-banner'>
                <ImagesBanner data={images} />
            </div>
        </StyledTitle>
    )
}

export default Title

const StyledTitle = styled.div`
    margin: 0 7.3%;
    text-align:center;
    padding: clamp(50px,10vw,90px) 7.3% 60vh 7.3%;
    position:relative;

    @media only screen and (min-height: 1200px) {
        padding: clamp(50px,10vw,90px) 7.3% 45vh 7.3%;
    }

    ${media.xl`
        padding: clamp(50px,10vw,90px) 7.3%;
    `}

    ${media.m`
        margin:0;
    `}

    .header{
        display:flex;
        flex-direction:column;
        gap:3rem;

        h3{
            font-weight:700;
            font-size:3rem;

            ${media.l`
                font-size:2rem;
            `}

            ${media.s`
                font-size:1.5rem;
            `}
        }

        p{
            font-size: 1.5rem;
            max-width: 700px;
            margin: 0 auto;
            line-height: 2rem;
        }
    }

    .counter-timer{
        display:flex;
        justify-content:space-around;
        gap:5%;
        max-width: 1600px;
        margin: 0 auto;
        margin-top:3rem;

        ${media.xl`
            flex-direction:column;
            gap:3rem;
        `}

        .timer{
            span{
                font-weight:700;
                font-size:5rem;
            }

            p{
                text-transform:uppercase;
                font-size: 1.5rem;
            }
        }      

        hr{
            transform: rotate(90deg);
            margin:0;

            :last-child{
                display:none;
            }
        }
    }

    .images-banner{
        position: absolute;
        bottom: -35vh;
        left: 0;
        width: 100%;

        ${media.xl`
            position:static;
            padding-top: clamp(50px,10vw,90px);
        `}
    }
`