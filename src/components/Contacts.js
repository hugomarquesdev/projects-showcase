import React from "react"
import { media } from './Styles'
import styled from "styled-components"

const Contacts = ({ data }) => {
    return(
        <StyledContacts>
            {data.map((contact, key) => (
                <div className='contact' key={key}>
                    <a href={contact.textLink} style={{marginBottom:'1rem'}}><img src={contact.icon} alt='Icon'/></a>
                    <a href={contact.textLink}><h4 style={{fontWeight:'700'}} dangerouslySetInnerHTML={{ __html: contact.text }}></h4></a>
                    <a href={contact.text2Link}><h4 dangerouslySetInnerHTML={{ __html: contact.text2 }}></h4></a>
                </div>
            ))}
        </StyledContacts>
    )
}

export default Contacts

const StyledContacts = styled.div`
    margin: 0 0 0 7.3%;
    text-align:center;
    padding: clamp(50px,10vw,90px) 7.3%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    gap:5%;

    ${media.xl`
        flex-direction:column;
        gap:5rem;
    `}

    ${media.m`
        margin:0;
    `}

    .contact{
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        img{
            max-width:35px;
        }

        h4{
            font-weight:400;
            font-size:1.3rem;
        }
    }
`