import React, { useState, useRef } from "react"
import styled from 'styled-components'
import { media } from './Styles'
import addToMailchimp from 'gatsby-plugin-mailchimp'

// import fbTrack from '../custom/use-pixel'
// import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
const axios = require("axios")

const Form = ({ data }) => {
    const [newsletter, setNewsletter] = useState(false)
    const [success, setSuccess] = useState(false)
    const [terms, setTerms] = useState()
    const form = useRef()

    function formSubmit(e) {
        e.preventDefault()
        
        // IF USER SELECTED SUBSCRIBE TO NEWSLETTER
        newsletter && (
            addToMailchimp(document.querySelector("#email").value, {
                FNAME: document.querySelector("#name").value,
                LNAME: document.querySelector("#surname").value
            })
        )

        // IF USER ACCEPTED TERMS
        if (terms) {
            var formData = new FormData(form.current)

            formData.append("name", document.querySelector("#name").value)
            formData.append("surname", document.querySelector("#surname").value)
            formData.append("phone", document.querySelector("#phone").value)
            formData.append("email", document.querySelector("#email").value)
            formData.append("city", document.querySelector("#city").value)
            formData.append("message", document.querySelector("#message").value)

            axios
                // .post("https://pontourbano.pt/form-contact.php", formData, {
                .post("https://invisual.pt/teste-form/ponto-urbano/form-contact.php", formData, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "multipart/form-data; charset=UTF-8",
                    },
                })
                .then(() => {
                    // typeof window !== "undefined" &&
                    //     window.gtag("event", 'Click', {
                    //         event_category: "Formulário de Contacto",
                    //         event_label: formData.get('Submetido')
                    //     })
                    setSuccess(true)
                    setTerms()
                    form.current.reset()
                })
        } else {
            setTerms(false)
            setSuccess(false)
        }
    }

    return (
        <StyledForm>
            <div className="form">
                <form ref={form} onSubmit={formSubmit}>
                    <div className='grid'>
                        <label>
                            <h4 className="uppercase">{data.name}</h4>
                            <input type="text" name="name" id="name" required />
                        </label>
                        <label>
                            <h4 className="uppercase">{data.surname}</h4>
                            <input type="text" name="surname" id="surname" required />
                        </label>
                        <label>
                            <h4 className="uppercase">{data.phone}</h4>
                            <input type="number" name="phone" id="phone" required/>
                        </label>
                        <label>
                            <h4 className="uppercase">{data.email}</h4>
                            <input type="email" name="email" id="email" required />
                        </label>
                        <label>
                            <h4 className="uppercase">{data.city}</h4>
                            <input type="text" name="city" id="city" />
                        </label>
                    </div>

                    <div className='checkboxes'>
                        <label onClick={() => setNewsletter(!newsletter)}>
                            <div className='checkbox' style={newsletter ? {background:'#000'} : {}}></div>
                            <h4 className="uppercase">{data.newsletter}</h4>
                        </label>

                        <label onClick={() => setTerms(!terms)}>
                            <div className='checkbox' style={terms ? {background:'#000'} : {}}></div>
                            <h4 className="uppercase">{data.terms}</h4>
                        </label>
                    </div>

                    <label className="messageLbl">
                        <h4 className="uppercase">{data.message}</h4>
                        <textarea name="message" id="message" rows="10" required />
                    </label>

                    <div className="btnResponse">
                        <div className="checks">
                            <label className="optIn">
                                <h5>
                                    {data.warning}
                                </h5>
                            </label>
                        </div>
                        <button type="submit" className="btn"><h5>{data.send}</h5></button>
                    </div>

                    {terms === false && <h4 className="red">Tem que aceitar os Termos e Condições e Política de Privacidade.</h4>}
                    {success && <h4 className="green">{data.success}</h4>}
                </form>
            </div>

            <div className="map">
                <iframe
                    title='Map'
                    src="https://snazzymaps.com/embed/355326"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                ></iframe>
            </div>
        </StyledForm>
    )
}

export default Form

const StyledForm = styled.div`
    position:relative;
    width: calc(100% - 7.3%);
    margin-left: 7.3%;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap:5%;
    padding: clamp(50px,10vw,90px) 7.3%;

    ${media.xl`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: clamp(50px,10vw,50px) 7.3%;
        gap:3rem;
    `}

    ${media.m`
        margin-left: unset;
        width: 100%;
    `}

    .form{
        margin: auto;
        text-transform: uppercase;
        width:100%;
        
        form{
            position:relative;

            .grid{
                display: grid;
                grid-template-columns: repeat(2,1fr);
                gap: 2rem 5%;

                ${media.m`
                    grid-template-columns:1fr;
                `}
                
                label{
                    display: flex;
                    align-items: center;
                    width: 100%;

                    h4{
                        white-space:nowrap;
                    }

                    .uppercase{
                        text-transform: uppercase;
                    }
                    
                    input{
                        margin-left: 1rem;
                        width: 100%;
                        background: none;
                        border: none;
                        border-bottom: solid 1px;
                        
                        :focus{
                            outline: none;
                        }
                    }
                }
            }

            .checkboxes{
                margin:2rem 0;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                label{
                    display: flex;
                    gap: 0.5rem;
                    align-items: flex-start;

                    .checkbox{
                        width: 100%;
                        max-width:15px;
                        height: 15px;
                        border: 1px solid #000;
                    }
                }        
            }
        
            .messageLbl{
                display: block;

                h4{
                    margin-bottom:1rem;
                }

                textarea{
                    background-color: transparent;
                    width: 100%;
                    outline: none;
                    resize: none;
                    border:1px solid;
                }
            }

            .optIn{
                display: -webkit-box;
                align-items: center;
                width: 100%;
                margin: 0;
                padding-right: 1em;
                max-width:400px;

                h5{
                    font-weight:300;
                    text-transform:uppercase;
                    font-size:0.7rem;
                }

                input{
                    border: 1px solid;
                    cursor: pointer;
                    height: 30px;
                    width: 30px;
                    margin: 0 15px 0 0;
                    -webkit-appearance: button;
                    -webkit-appearance: checkbox;
                }
            }
        }
    }

    .map{
        iframe{
            ${media.s`
                height:400px;
            `}
        } 
    }

    .btn{
        border: 1px solid;
        padding: 1em 5em;
        text-transform: uppercase;
        transition: all 150ms ease-out;

        :hover{
            background:#000;
            color:  #fff;
        }
    }

    .btnResponse{
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        margin-top:1rem;

        ${media.s`
            flex-direction: column;
            gap: 1rem;
        `}
    }

    .red{
        color: #D31F3A; 
        position: absolute; 
        right: 0;
        margin-top: 1rem;
        text-align:right;
    }

    .green{
        color: #51BC24; 
        position: absolute; 
        right: 0;
        margin-top: 1rem;
        text-align:right;
    }
`