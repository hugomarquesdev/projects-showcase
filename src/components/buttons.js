import styled, { css } from "styled-components"

export const Button = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 2px solid #b9c2c6;
  padding: 0.75rem 2rem;
  user-select: none;
  outline: none;

  :hover{
    background-color: #707070;
    background-color: rgba(185, 194, 198, 0.50);
  }
  :active{
    background-color: #707070;
    background-color: rgba(185, 194, 198, 1);
  }

  ${props =>
    props.as &&
    css`
      display: inline-block;
      text-align: center;
      text-decoration: none;
      :active {
        border-color: orange;
        background-color: orange;
      }
    `}

  ${props =>
    props.primary &&
    css`
      background: purple;
      color: white;
      width: 200px;
    `}

  ${props =>
    props.projeto &&
    css`
      background: #fff;
      color: black;
      :hover {
        background-color: #1d252c;
        color: #fff;
      }
    `}
`
