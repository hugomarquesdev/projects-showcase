import React from "react"

import styled from "styled-components"
import { Image } from './Images'
import { media } from './Styles'
import email from '../images/email.svg'

const Team = ({ data }) => (
    <StyledTeam>
        <div className='title'>{data.title}</div>

        <div className="ceo">
            <div className='image-container'>
                <Image
                    alt='Ponto Urbano'
                    src={data.members[0].image}
                />
            </div>
            <div className='ceo-content'>
                <p className="ceoTxt">{data.quote}</p>
                <div className="ceoName">
                    <p className='name'>{data.members[0].name}</p>
                    <p className='name-ceo'>{data.members[0].title}</p>
                </div>
            </div>
        </div>

        <div className="team">
            {data.members.slice(1).map((data, i) => (
                <div key={"teamLand" + i} className="member">
                    <div className="img">
                        <Image
                            alt='Ponto Urbano'
                            src={data.image}
                            style={{ height: `100%` }}
                        />
                    </div>
                    <a href={'mailto:' + data.email}><img src={email}/></a>
                    <h3 className='member-name'>{data.name}</h3>
                    <h3 className='member-title'>{data.title}</h3>
                </div>
            ))}
        </div>
    </StyledTeam>
)

export default Team

const StyledTeam = styled.div`
    padding: clamp(50px,10vw,90px) 7.3%;
    margin-left: 7.3%;

    ${media.l`
        margin-left:0;
    `}

    .title{
        font-weight:700;
        font-size:2.5rem;
        text-align:center;
        padding-bottom: clamp(50px,10vw,90px);
    }

    .ceo {
        display: grid;
        grid-template-columns: 0.8fr 1fr;

        ${media.xl`
            grid-template-columns:1fr;
        `}

        .image-container{
            padding: 3rem 0;
            background: linear-gradient( to right, transparent 0%, transparent 30%, #141517 30%, #141517 100% );

            ${media.xl`
                background: #141517;
                padding: 1rem;
            `}
        }

        .ceo-content{
            background-color:#141517;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color:#ebebeb;
            font-weight:400;
            gap:2rem;
            padding:0 5%;

            ${media.xl`
                background: #141517;
                padding:1rem 5%;
            `}

            .ceoTxt {
                letter-spacing: 0.7px;
                font-size: 2rem;

                ${media.xxl`
                    font-size:1.5rem;
                `}
            }

            .ceoName {
                .name {
                    font-weight:700;
                    font-size: 1.5rem;
                }

                .ceo{
                    font-size: 1rem;
                    font-weight:400;
                }
            }
        }    
    }

    .team {
        padding-top: clamp(50px,10vw,90px);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap:10rem 10%;

        ${media.xl`
            grid-template-columns: repeat(2, 1fr);
            gap:5rem 10%;
        `}
    }

    .member {
        position: relative;
        text-align: center;

        .img {
        width: 100%;
        margin-bottom: 1rem;
        }

        a{
            margin:0 auto;

            img{
                max-width:30px;
            }
        }

        .member-name{
            font-weight:700;
            font-size:1.5rem;
            margin-top:1rem;
        }

        .member-title{
            font-weight:400;
        }
    }
`
