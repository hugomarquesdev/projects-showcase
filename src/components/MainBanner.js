import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Div100vh from "react-div-100vh"
import { Image } from './Images'
import { media } from './Styles'

import logo from "../images/misc/Logo-CantoSuperiorDireito.svg"

const MainBanner = ({ data, white }) => (
    <StyledBanner white={white}>
        <Image
            src={data.slider}
            alt='Ponto Urbano'
        />
        <div className='content'>
            <div className='logo'>
                <Link to='/' className="logoHome">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className='title'>
                <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            </div>
        </div>
    </StyledBanner>
)

export default MainBanner

const StyledBanner = styled(Div100vh)`
    position:relative;

    .image{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;

        ${props => props.white ? 
            `
            ::before{
                content:'';
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                z-index: 1;
                background: rgb(255,255,255);
                background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0.5018382352941176) 80%);
            }
            `  
        :
            `
            ::before{
                content:'';
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background-color: #2c2c2c;
                opacity: 0.3;
                z-index: 1;
            }
            `
        }        
    }

    .content{
        position:relative;
        padding: 0 7.3%;
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center;
        color:${props => props.white ? '#000' : '#fff'};

        .logo{
            position: absolute;
            top: 20%;
            transform: translateY(-20%);

            img{
                width:100%;
                max-width:200px;
                ${props => props.white && `filter:invert(1)`};

                ${media.l`
                    max-width:150px;
                `}

                ${media.s`
                    max-width:100px;
                `}
            }
        }

        h1{
            font-weight:400;
            font-size:3.5rem;

            ${media.l`
                font-size:2.5rem;
            `}

            ${media.s`
                font-size:2rem;
            `}
        }
    }
`
