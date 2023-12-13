import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled, { css } from "styled-components"
import Div100vh from "react-div-100vh"

import Sbs from "./menuBackground"
import logo from "../../images/logo.svg"

import { useBreakpoint } from "gatsby-plugin-breakpoints"
import pt2020 from "../../images/pt2020.png"
import pt2020W from "../../images/pt2020w.png"

const HomeMenu = ({
  data,
  blogImage,
  title,
  hasSlider,
  isNews,
  wordpressImage,
}) => (
  <StyledMenu hasSlider={hasSlider}>
    <div className="corner" id="logoHome">
      <Link to="/" className="logoHome">
        <img src={logo} alt="logo" />
      </Link>
      <a
        href="/Ponto_Urbano-Ficha_projeto.pdf"
        target="_blank"
        rel="nofollow"
        className="logoFinan"
        id="logoFinan"
      >
        <img
          src={useBreakpoint().mobile ? pt2020 : pt2020W}
          alt="Financiamento"
        />
      </a>
    </div>
    <div className="background">
      <Sbs
        data={blogImage ? blogImage : data.slider}
        wordpressImage={wordpressImage}
        sliderStrips={data.sliderStrips}
        title={title}
        filter={data.filter}
        all={data}
        hasSlider={hasSlider}
        isBlog={true}
        isNews={isNews}
      />
    </div>
  </StyledMenu>
)

export default HomeMenu

HomeMenu.propTypes = {
  hasSlider: PropTypes.bool,
}

const StyledMenu = styled(Div100vh)`
  width: 100%;
  position: relative;
  overflow: hidden;
  .corner {
    position: absolute;
    top: 3rem;
    right: 3rem;
    width: 13.5vw;
    z-index: 1;
    @media only screen and (max-width: 768px) {
      top: 12vw;
      right: 7.5%;
      width: 30vw;
    }
  }
  .logoHome {
    img {
      width: 100%;
    }
  }
  .logoFinan {
    margin-top: 6vw;
    img {
      width: 100%;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    height: 50vh;

    ${(props) =>
      props.hasSlider &&
      css`
        height: calc(50vh + 10rem);
        padding-bottom: 10rem;
        background-color: #1d252c;
      `}

    .logoHome {
      display: none;
    }
  }

  @media screen and (max-width: 415px) {
    height: 52.5vh;

    ${(props) =>
      props.hasSlider &&
      css`
        height: calc(52.5vh + 5rem);
        padding-bottom: 5rem;
      `}
  }
`
