import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Div100vh from "react-div-100vh"
import { media } from "./Styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import logo from "../images/logo.svg"

const ArticleBanner = ({ data }) => {
  const image = {
    image: getImage(data.featuredImage?.node?.localFile),
    alt: data.featuredImage?.node?.altText || "",
  }

  return (
    <StyledBanner>
      {image?.image && (
        <div className="image">
          <GatsbyImage image={image.image} alt={image.alt} />
        </div>
      )}
      <div className="content">
        <div className="logo">
          <Link to="/" className="logoHome">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h4 className="category">{data.categories.nodes[0].name}</h4>
        <h1
          className="title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h1>
      </div>
    </StyledBanner>
  )
}

export default ArticleBanner

const StyledBanner = styled(Div100vh)`
  position: relative;

  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    .gatsby-image-wrapper {
      height: 100%;
    }

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 20%,
        rgba(255, 255, 255, 0.5018382352941176) 80%
      );
    }
  }

  .content {
    position: relative;
    margin: 0 7.3%;
    padding: 5%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    text-align: left;
    color: #000;
    max-width: 1000px;

    ${media.m`
            margin:0;
        `}

    .logo {
      position: absolute;
      top: 20%;
      transform: translateY(-20%);

      img {
        width: 100%;
        max-width: 200px;
        filter: invert(1);

        ${media.l`
                    max-width:150px;
                `}

        ${media.s`
                    max-width:100px;
                `}
      }
    }

    h4 {
      text-transform: uppercase;
      font-size: 1.6rem;
    }

    h1 {
      font-weight: 700;
      font-size: 3rem;
      text-transform: lowercase;

      ${media.l`
                font-size:2.5rem;
            `}

      ${media.s`
                font-size:2rem;
            `}

            ::first-letter {
        text-transform: capitalize;
      }
    }
  }
`
