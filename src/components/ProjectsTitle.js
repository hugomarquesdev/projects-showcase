import React from "react"
import { media } from "./Styles"
import logo from "../images/logo.svg"

import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <img src={logo} alt="Home Simple" />
      <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
    </StyledTitle>
  )
}

export default Title

const StyledTitle = styled.div`
  margin: 0 7.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  text-align: center;
  padding-top: clamp(100px, 10vw, 150px);

  img {
    max-width: 200px;
    width: 100%;

    ${media.m`
            max-width:150px;
        `}
  }

  h1 {
    font-weight: 500;
    font-size: 3.5rem;

    ${media.l`
            font-size:2.5rem;
        `}

    ${media.s`
            font-size:2rem;
        `}
  }
`
