import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Image } from "./Images"
import { media } from "./Styles"

import logo from "../images/logo.svg"

const ProjectsBanner = ({ data }) => {
  return (
    <StyledBanner>
      <div className="content">
        <div className="logo">
          <Link to="/" className="logoHome">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="title-subtitle">
          <span dangerouslySetInnerHTML={{ __html: data.subtitle }}></span>
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        </div>
        <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
      </div>
      <Image src={data.slider} alt={data.alt} />
    </StyledBanner>
  )
}

export default ProjectsBanner

const StyledBanner = styled.div`
  display: flex;
  margin: 0 0 0 7.3%;
  height: 100vh;

  ${media.l`
        flex-direction:column;
        height:unset;
    `}

  ${media.m`
        margin:0;
        padding-top: 10.5%;
    `}

    .image {
    width: 60%;

    @media only screen and (min-width: 2000px) {
      width: 70%;
    }

    ${media.l`
            width:100%;
        `}
  }

  .content {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 5%;
    text-align: center;

    @media only screen and (min-width: 2000px) {
      width: 30%;
    }

    ${media.l`
            width:100%;
            padding: 3rem 5%;
            gap:3rem;
            justify-content: space-between;
        `}

    .logo {
      img {
        width: 100%;
        max-width: 100px;

        ${media.l`
                    max-width:80px;
                `}
      }
    }

    .title-subtitle {
      text-transform: uppercase;
      max-width: 400px;

      span {
        font-weight: 400;
      }

      h1 {
        font-weight: 400;
        font-size: 3.5rem;
        margin-top: 1rem;
        line-height: 3.5rem;

        ${media.l`
                    font-size:2.5rem;
                    margin-top:0;
                `}

        ${media.s`
                    font-size:2rem;
                `}
      }
    }

    p {
      max-width: 400px;
      font-size: 1.5rem;
    }
  }
`
