import React from "react"
import { media } from './Styles'
import styled from "styled-components"

const Title = ({ data }) => {
    return(
        <StyledTitle>
            {data.map(content =>
                <h3 dangerouslySetInnerHTML={{ __html: content.text }}></h3>  
            )}
        </StyledTitle>
    )
}

export default Title

const StyledTitle = styled.div`
    margin: 0 7.3%;
    text-align:center;
    padding: clamp(50px,10vw,180px) 7.3% clamp(50px,10vw,90px) 7.3%;
    display:flex;
    flex-direction:column;
    gap:3rem;

    ${media.m`
        margin:0;
    `}

    h3{
        font-weight:400;
        font-size:2rem;

        ${media.s`
            font-size:1.5rem;
        `}
    }
`