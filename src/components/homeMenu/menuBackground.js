import React, { useEffect } from "react"
import { Link } from "gatsby"

import styled, { css } from "styled-components"
import Div100vh from "react-div-100vh"
import { Image } from "../Images"
import { GatsbyImage } from "gatsby-plugin-image"

import { closeNav } from "./panel"
import logo from "../../images/logo.svg"

const SBS = ({
  data,
  wordpressImage,
  sliderStrips,
  title,
  filter,
  all,
  hasSlider,
  isBlog,
  isNews,
}) => {
  useEffect(() => {
    if (Array.isArray(data) && !sliderStrips) {
      var interval = setInterval(fader, 5000)
    }
    return function cleanup() {
      clearInterval(interval)
    }
  })

  var i = 1,
    j,
    left = 0

  function fader(slide) {
    for (j = 0; j < data.length; j++) {
      document.querySelector("#slide" + j).style.opacity = 0
      document.querySelector("#slideTxt" + j).style.opacity = 0
    }
    if (!isNaN(slide)) {
      document.querySelector("#slide" + slide).style.opacity = 1
      document.querySelector("#slideTxt" + slide).style.opacity = 1
    } else {
      document.querySelector("#slide" + i).style.opacity = 1
      document.querySelector("#slideTxt" + i).style.opacity = 1
    }
    if (i >= data.length - 1) {
      i = 0
    } else {
      i = i + 1
    }
  }

  function slide() {
    if (left / -23 > data.length - 4) {
      left = 23
    }
    document.querySelector(".slidePickerContainer").style.left =
      left - 23 + "vw"
    left -= 23
  }

  function slideMobile() {
    document.querySelector(".slidePickerContainer__mobile").style.left =
      left - 40 + "vw"
    left -= 40
    if (left / -40 > data.length - 3) {
      left = 40
    }
  }

  return (
    <StyledBackground
      fixed={sliderStrips}
      hasSlider={hasSlider}
      isBlog={isBlog}
      isNews={isNews}
    >
      <Link to="/" className="logo" id="logo" onClick={closeNav}>
        <img src={logo} alt="logo" />
      </Link>
      {Array.isArray(data) ? (
        data.map((data, i) => (
          <div key={"homeSlide" + i} className="combo">
            <div className="slideContainer" id={"slide" + i}>
              <Image
                src={data.image}
                alt={data.alt && data.alt}
                key={i}
                className="slide"
                style={{ height: "100%" }}
              />
            </div>
            <div className="bottomCont opac" id={"slideTxt" + i}>
              {data.title_image ? (
                <div className="title-logo">
                  <Image
                    src={data.title_image}
                    alt={data.alt && data.alt}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
              ) : (
                data.title && (
                  <h1 className={" text txtTitle txtBreak"}>{data.title}</h1>
                )
              )}
              {data.text && Array.isArray(data.text) ? (
                data.text.map((data, i) => (
                  <h1 key={"txt" + i} className={" text txtBot txtBreak"}>
                    {data}
                    <br></br>
                  </h1>
                ))
              ) : (
                <h1 className={" text txtBot txtBreak"}>{data.text}</h1>
              )}
              <p className="txtBot isLast"></p>
            </div>
          </div>
        ))
      ) : (
        <div className="fixedImage">
          {wordpressImage ? (
            <GatsbyImage
              image={data.image}
              alt={data.image.alt || ""}
              style={{ height: `100%` }}
            />
          ) : (
            <Image
              src={data}
              alt={data.alt && data.alt}
              style={{ height: `100%` }}
            />
          )}
        </div>
      )}
      {filter && (
        <Image
          src={filter}
          alt={data.alt && data.alt}
          style={{ width: `100%`, position: "absolute" }}
          filter
        />
      )}
      {title ? (
        <div className="bottomCont">
          {title.title && <h1 className={" text txtTitle"}>{title.title}</h1>}
          {title && <h1 className={" text txtTitle"}>{title}</h1>}
          {title.text && <h1 className={" text txtBot"}>{title.text}</h1>}
          <p className="txtBot isLast"></p>
        </div>
      ) : (
        <div className="bottomCont hasSlider">
          {all.title && <h1 className={" text txtTitle"}>{all.title}</h1>}
          {Array.isArray(all.text) ? (
            all.text.map((data, i) => (
              <h1 key={"txt" + i} className={" text txtBot txtList"}>
                {data}
                <br></br>
              </h1>
            ))
          ) : (
            <h1 className={" text txtBot"}>{all.text}</h1>
          )}
          <p className="txtBot isLast"></p>
          {sliderStrips && (
            <div className="slider">
              <div className="picker">
                <div className="slidePickerContainer">
                  {sliderStrips.map((data, i) => (
                    <button
                      onClick={() => fader(i)}
                      className="pickerSlide"
                      key={"sliderPick" + i}
                      id={"pickerSlide" + i}
                    >
                      <Image
                        src={data}
                        key={i}
                        className="pickerSlideImg"
                        style={{ height: `100%` }}
                        alt={data.alt && data.alt}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={slide} className="btnPicker">
                {">"}
              </button>
            </div>
          )}
          {sliderStrips && (
            <div className="slider__mobile">
              <div className="picker">
                <div className="slidePickerContainer slidePickerContainer__mobile">
                  {sliderStrips.map((data, i) => (
                    <button
                      onClick={() => fader(i)}
                      className="pickerSlide"
                      key={"sliderPick" + i}
                      id={"pickerSlide" + i}
                    >
                      <Image
                        src={data}
                        key={i}
                        className="pickerSlideImg"
                        style={{ height: `10rem` }}
                        alt={data.alt && data.alt}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={slideMobile} className="btnPicker">
                {">"}
              </button>
            </div>
          )}
        </div>
      )}
    </StyledBackground>
  )
}

export default SBS

const StyledBackground = styled(Div100vh)`
  overflow: hidden;
  position: relative;
  text-shadow: 3px 3px 4px #000;
  .fixedImage {
    height: 100%;

    ${(props) =>
      props.isBlog &&
      css`
        background: black;

        .gatsby-image-wrapper {
          opacity: 0.9;
        }
      `}
  }
  .slideContainer {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    ${(props) =>
      !props.fixed &&
      css`
        animation: kenburns 10s infinite;
      `}
    opacity: 0;
    transition: opacity 2s;
  }
  #slide0 {
    opacity: 1;
  }
  .opac {
    opacity: 0;
    transition: opacity 2s;
  }
  #slideTxt0 {
    opacity: 1;
  }
  .slide {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .filter {
    bottom: 0;
    left: 0;
  }
  .bottomCont {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    z-index: 1;
    .text {
      padding: 0 10vw;
      letter-spacing: 2px;
      margin-left: 7.3%;
      ${(props) =>
        props.isNews &&
        css`
          text-transform: uppercase;
        `};
    }

    .txtTitle {
      margin-bottom: 2vw;
    }
  }
  .slider {
    display: flex;
  }
  .slider__mobile {
    display: none;
  }
  .picker {
    display: flex;
    margin-left: 7.3%;
    height: 5vw;
    overflow: hidden;
    width: 66vw;
    .slidePickerContainer {
      display: flex;
      position: relative;
      left: 0vw;
      transition: left 0.5s;
      .pickerSlide {
        border: solid 1px #1d252c;
        width: 23vw;
      }
    }
  }
  .btnPicker {
    width: 5vw;
    background: #1d252c;
  }

  @keyframes kenburns {
    0% {
      transform: scale3d(1.1, 1.1, 1.1);
      animation-timing-function: ease-in-out;
    }
    50% {
      transform: scale3d(1, 1, 1);
      animation-timing-function: ease-in-out;
    }
    100% {
      transform: scale3d(1.1, 1.1, 1.1);
      animation-timing-function: ease-in-out;
    }
  }
  .bottomCont .isLast {
    margin-bottom: 12vw;
  }
  .bottomCont .txtTitle {
    font-size: 40px;
    letter-spacing: 0.2px;
    line-height: 1.1;
  }
  .bottomCont .txtBot,
  .bottomCont .txtList {
    font-weight: 500;
    font-size: 40px;
    letter-spacing: -0.8px;
    line-height: 1.1;
  }

  .logo {
    display: none;
  }

  .title-logo {
    width: 15rem;
    margin-left: calc(7.3% + 10vw - 15px);
    margin-bottom: 2rem;

    @media screen and (max-width: 1070px) {
      width: 12rem;
      margin-left: calc(7.3% + 5vw - 15px);
    }

    @media screen and (max-width: 768px) {
      width: 8rem;
      margin-left: calc(10vw - 15px);
      margin-bottom: 1rem;
    }

    @media screen and (max-width: 440px) {
      width: 5rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    .bottomCont .txtTitle,
    .bottomCont .txtBot,
    .bottomCont .txtList {
      font-size: calc(35px + 5 * (100vw - 769px) / (1400 - 769)) !important;
    }
  }
  @media screen and (min-width: 416px) and (max-width: 768px) {
    .bottomCont .txtTitle {
      font-size: calc(16px + 14 * (100vw - 416px) / (768 - 416)) !important;
      letter-spacing: 1.2px;
    }
    .bottomCont .txtBot,
    .bottomCont .txtList {
      font-size: calc(16px + 14 * (100vw - 416px) / (768 - 416)) !important;
      letter-spacing: -0.8px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1070px) {
    .bottomCont .text {
      padding: 0 5vw;
    }
    .bottomCont .txtList {
      font-size: calc(21px + 5.5 * (100vw - 769px) / (1070 - 769));
    }
    .bottomCont .isLast {
      margin-bottom: 20vw;
    }
  }
  @media screen and (max-width: 768px) {
    .bottomCont .text {
      letter-spacing: 1.15px;
    }
    .bottomCont .txtTitle {
      font-size: calc(16px + 8.7 * (100vw - 320px) / (768 - 320));
    }
    .bottomCont .txtBot {
      font-size: calc(15px + 9.7 * (100vw - 320px) / (768 - 320));
    }
    .logo {
      display: block;
      position: absolute;
      left: 10vw;
      top: 25vh;
      z-index: 1;
      img {
        width: 35vw;
        max-width: 12rem;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .bottomCont .text {
      padding: 0 10vw;
      margin-left: unset;
    }
    .bottomCont .txtBot {
      margin-bottom: 0;
    }
    .bottomCont .isLast {
      margin-bottom: 20vw;
    }
    .bottomCont .txtList {
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      margin-bottom: 0.25rem;
    }
    .slider {
      display: none;
    }
    .slider__mobile {
      display: flex;
    }

    ${(props) =>
      props.hasSlider &&
      css`
        .slideContainer {
          height: calc(100% - 10rem);
        }
        .bottomCont {
          bottom: 10rem;
        }
        .hasSlider {
          bottom: 0;
        }
        .hasSlider .picker {
          height: 10rem;
          width: 100vw;
          margin-left: unset;
        }
        .hasSlider .btnPicker {
          width: calc(26vw - 1px);
        }
        .hasSlider .slidePickerContainer__mobile .pickerSlide {
          width: 40vw;
        }
        .filter {
          bottom: 10rem;
        }
      `}
  }

  @media screen and (max-width: 415px) {
    .bottomCont .txtList {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    ${(props) =>
      props.hasSlider &&
      css`
        .slideContainer {
          height: calc(100% - 5rem);
        }
        .bottomCont {
          bottom: 5rem;
        }
        .hasSlider {
          bottom: 0;
        }
        .hasSlider .picker {
          height: 5rem;
          width: 100vw;
          margin-left: unset;
        }
        .hasSlider .btnPicker {
          width: calc(26vw - 1px);
        }
        .hasSlider .slidePickerContainer__mobile .pickerSlide {
          width: 40vw;
        }
        .hasSlider .pickerSlideImg {
          height: 5rem !important;
        }
        .filter {
          bottom: 5rem;
        }
      `}
  }

  @media screen and (max-width: 360px) {
    .bottomCont .txtList {
      font-size: 0.8rem;
      margin-bottom: 0.25rem;
    }
  }
`
