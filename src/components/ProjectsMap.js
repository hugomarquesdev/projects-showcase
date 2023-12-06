import React from "react"
import styled from 'styled-components'
import { media } from './Styles'
import Pin from '../images/pin.svg'

const Form = ({ data }) => {

    return (
        <StyledForm>
            <div className='content'>
                <div className='city'>
                    <img src={Pin} alt='Pin'/>
                    <h4>{data.city}</h4>
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <div className='places'>
                    {data.places.map((place, key) => (
                        <h5 key={key}>{place.place}</h5>
                    ))}
                </div>
            </div>
            <div className="map">
                <iframe
                    title='Map'
                    src="https://snazzymaps.com/embed/355326"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                ></iframe>
            </div>
        </StyledForm>
    )
}

export default Form

const StyledForm = styled.div`
    margin: 0 7.3%;
    padding: clamp(50px,10vw,90px) 7.3%;
    display:flex;

    ${media.xl`
        flex-direction:column;
        gap:5rem;
    `}

    ${media.l`
        margin:0;
    `}

    .content{
        width:40%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 2rem;
        text-align: center;

        ${media.xxl`
            width:50%;
        `}

        ${media.xl`
            width:100%;
        `}

        .city{
            img{
                margin-bottom:0.5rem;
            }

            h4{
                font-size: 1.5rem;
                font-weight:700;
                text-transform:uppercase;
            }
        }

        h3{
            font-weight:700;
            font-size:3rem;
        }

        .places{
            text-transform:uppercase;
            font-weight:400;
            font-size:1.2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .map{
        width:60%;

        ${media.xxl`
            width:50%;
        `}

        ${media.xl`
            width:100%;
        `}

        iframe{
            ${media.s`
                height:400px;
            `}
        } 
    }
`