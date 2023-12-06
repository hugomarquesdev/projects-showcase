import React from "react"

import styled from "styled-components"
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

const LangSwap = ({ open }) => {
  const { languages, originalPath, language } = useI18next()

  return(
    <StyledLangButton open={open}>
      <div className="options">
        {languages.map((lng, i) => (
            <Link to={originalPath} language={lng} className={lng === language ? 'selected' : ''} key={i}>
                <h3>{lng}</h3>
            </Link>
        ))}
      </div>
    </StyledLangButton>
  )
}

export default LangSwap

const StyledLangButton = styled.button`
  position: relative;
  text-transform: uppercase;
  border: 2px solid transparent;
  color: ${props => props.open ? '#ffffff' : '#1d252c'};

  .options{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: inherit;

    a{
      padding: 0.2em 0.1em 0.1em;
      width: 2.5em;
      border: 2px solid transparent;
      margin-bottom: 0 !important;

      h3{
          font-weight:600;
      }

      :hover{
        border: ${props => props.open ? '2px solid #ffffff' : '2px solid #1d252c'};
      }
    }

    .selected{
      border: ${props => props.open ? '2px solid #ffffff' : '2px solid #1d252c'};
    }
  }

  @media only screen and (max-width: 768px){
    font-size: 1em;
    margin-bottom: unset;
    
    .options{
      flex-direction: row;
      height: 1em;
    }
  }
`