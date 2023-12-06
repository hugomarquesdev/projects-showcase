import React from "react"
import styled from "styled-components"
import { media } from './Styles'
import { Image } from './Images'

const Features = ({ data }) => {

    return (
        <StyledFeatures>
            <div className='wrapper'>
                <div className='image-container'>
                    <Image
                        src={data.image}
                        alt={data.alt}
                    />
                </div>
                <div className='features'>
                    <h3>{data.title}</h3>
                    <div className='features-content'>
                        {data.features.map((feature, key) => (
                            <div className='feature' key={key}>
                                <Image src={feature.icon} alt='Feature' />
                                <h5>{feature.feature}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </StyledFeatures>
    )
}

export default Features

const StyledFeatures = styled.div`
    margin: 0 7.3%;
    padding: clamp(50px,10vw,90px) 7.3%;

    ${media.l`
        margin:0;
    `}

    .wrapper{
        max-width: 1000px;
        margin: 0 auto;
        background-color:#1a1a1a;
        color:#fff;

        .image-container{
            width:100%;
        }

        .features{
            padding: 3rem 5%;

            h3{
                font-weight:600;
                font-size: 2rem;
                text-align: center;
                margin-bottom:3rem;
            }

            .features-content{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                gap: 3rem;

                ${media.l`
                    justify-content:center;
                `}

                .feature{
                    display: flex;
                    gap: 1rem;
                    align-items: center;

                    img{
                        width:40px;
                        height:40px;
                    }

                    h5{
                        font-weight:400;
                        font-size: 1.2rem;
                    }
                }
            }   
        }        
    }    
`
