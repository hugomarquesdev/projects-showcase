import React, { useState } from "react"
import styled from 'styled-components'
import { Image } from './Images'
import { media } from './Styles'

import fbTrack from '../custom/use-pixel'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
const axios = require("axios")

const Form = ({ data, transparent, title, white }) => {
    const [addedToContacto, setAddedToContacto] = useState("");
    const [hasError, setHasError] = useState("");

    const [isSelected, setIsSelected] = useState("Nenhuma seleção");

    function doSubmit(e) {
        e.preventDefault()
        if (document.querySelector('#name').value.length < 1) {
            setHasError(data.nameMissing);
        }
        else {
            var formData = new FormData()
            formData.append("projectForm", true)
            formData.append("name", document.querySelector("#name").value)
            formData.append("surname", document.querySelector("#surname").value)
            formData.append("phone", document.querySelector("#phone").value)
            formData.append("email", document.querySelector("#email").value)
            formData.append("city", document.querySelector("#city").value)
            formData.append("interest", isSelected)
            formData.append("source", '*não veio de nenhuma página de projeto.*')
            formData.append("message", document.querySelector("#message").value)

            axios
                .post("https://pontourbano.pt/interest-form.php", formData, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "multipart/form-data; charset=UTF-8",
                    },
                })
                .then(res =>
                    res.data === "success"
                        ? (sucesso())
                        : (emailErrorLang(res.data), setAddedToContacto(""))
                )
        }
    }

    function emailErrorLang(str) {
        if (str === 'Email inválido.') {
            setHasError(data.invalidEmail)
        }
        else {
            setHasError(str)
        }
    }

    function sucesso() {
        setAddedToContacto(data.success);
        setHasError("");
        fbTrack('track', 'Contacto - Página de Sucesso');
        trackCustomEvent({
            // string - required - The object that was interacted with (e.g.video)
            category: "Botão de envio do formulário do projeto " + data.id,
            // string - required - Type of interaction (e.g. 'play')
            action: "Click",
            // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
            label: "Contacto - CTA - Página de Sucesso"
        });
    }

    return (
        <StyledForm id='form-footer' transparent={transparent} white={white}>
            {title &&
                <div className='main-title' dangerouslySetInnerHTML={{ __html: data.contact.title }}></div>
            }
            <div className='wrapper'>
                <div className="contact">
                    <div className="contact-content">
                        {!title &&
                            <h5 className="title" dangerouslySetInnerHTML={{ __html: data.contact.title }}></h5>
                        }
                        <h3 className="underline info-title">{data.contact.message}</h3>
                        {data.contact.comercial.map((comercial, key) => (
                            <div className='content' key={key}>
                                <div className="image-container">
                                    <div className='mapaImgM'>
                                        <Image
                                            src={comercial.img}
                                        />
                                    </div>
                                </div>
                                <div className="info">
                                    <h3 className="info-name">{comercial.name}</h3>
                                    <a href={"tel: " + comercial.phone} className="info-phone">{comercial.phone}</a>
                                    <a href={"mailto: " + comercial.email} className="info-email">{comercial.email}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form">
                    <form>
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
                                <input type="number" name="phone" id="phone" required />
                            </label>
                            <label>
                                <h4 className="uppercase">{data.email}</h4>
                                <input type="email" name="email" id="email" required />
                            </label>
                            <label>
                                <h4 className="uppercase">{data.city}</h4>
                                <input type="text" name="city" id="city" required />
                            </label>
                        </div>

                        <label className="interestLbl">
                            <h5 className="uppercase">{data.interest}</h5>
                            <div className="citygroup">
                                {data.citygroup.map((data, i) => (
                                    <div className="city" key={"city:" + i}>
                                        <h5 className="city-title">{data.title}</h5>
                                        {data.group.map((data, i) => (
                                            <button className="city-btn" type="button" onClick={() => { setIsSelected(data) }} key={"option:" + i}>
                                                <span className="selection" style={{ 
                                                    backgroundColor: (isSelected === data && white) ? "#000" : (isSelected === data && !white) && '#fff'
                                                }} />
                                                <h5>{data}</h5>
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </label>

                        <label className="messageLbl">
                            <h4 className="uppercase">{data.message}</h4>
                            <textarea name="message" id="message" rows="10" required />
                        </label>

                        <div className="btnResponse">
                            <div className="checks">
                                <label className="optIn">
                                    <h5>
                                        {data.terms}
                                    </h5>
                                </label>
                            </div>
                            <button type="submit" className="btn" onClick={doSubmit}><h5>{data.send}</h5></button>
                        </div>

                        {hasError && <h4 className="red">{hasError}</h4>}
                        {addedToContacto && <h4 className="green">{addedToContacto}</h4>}
                    </form>
                </div>
            </div>
        </StyledForm>
    )
}

export default Form

const StyledForm = styled.div`
    background: ${props => props.transparent ? 'transparent' : props.white ? '#fff' : '#2c2c2c'};
    color: ${props => props.white ? '#000' : '#ebebeb'};
    padding: clamp(50px,10vw,90px) 7.3%;

    .main-title{
        font-weight:700;
        font-size:2.5rem;
        text-align:center;
        padding-bottom: clamp(50px,10vw,90px);
    }

    .wrapper{
        position:relative;
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap:5%;

        ${media.xl`
            display: flex;
            flex-direction: column;
            justify-content: center;
        `} 

        .contact{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            ${media.xl`
                margin-bottom:5rem;
            `}

            .contact-content{
                display: flex;
                flex-direction: column;
                gap: 2rem;

                ${media.m`
                    gap:3rem;
                `}

                .title{
                    text-align:center;
                    font-weight:600;
                    font-size:1.8rem;
                    margin-bottom:3rem;
                }

                .info-title{
                    font-size:1.3rem;
                    font-weight:700;
                    letter-spacing:0.1rem;
                    text-transform: uppercase;
                }

                .underline{
                    text-decoration: underline;
                }

                .content{
                    display: flex;
                    align-items: center;

                    ${media.s`
                        flex-direction:column;
                    `}

                    .image{
                        width: 6vw; 
                        margin-right: 2vw; 

                        ${media.l`
                            width:70px;
                        `}
                        
                        img{
                            width: 100%;
                        }
                    }

                    .info{
                        text-transform: uppercase;

                        .info-name{
                            margin-bottom:1rem;
                        }
                        
                        h3{
                            margin-top: 0.3em;
                            letter-spacing:0.1rem;
                        }
                        
                        a{
                            font-size:0.9rem;
                            padding: 0.4em 0.7em;
                            background-color: ${props => props.white ? '#000' : '#ffffff'};
                            color: ${props => props.white ? '#fff' : '#333d45'};
                            margin-top: 0.5rem;
                        }     
                    }
                }      
            }
        }

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
                    margin-bottom:3rem;

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
                            border-bottom: ${props => props.white ? '1px solid #000' : 'solid 1px'};
                            color: ${props => props.white ? '#000' : '#ffffff'};
                            
                            :focus{
                                outline: none;
                            }
                        }
                    }
                }
                
                .interestLbl{
                    display: block;
                    margin-bottom:3rem;

                    .uppercase{
                        margin-bottom: 1em;
                    }
                    
                    .citygroup{
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        gap:0 1rem;

                        ${media.s`
                            grid-template-columns:1fr;
                        `}

                        .city:nth-child(1){
                            grid-row-start: 1;
                            grid-row-end: 3; 
                        }                    

                        .city{
                            display: flex;
                            flex-direction: column;
                            gap: 0.4rem;

                            ${media.s`
                                margin-bottom:1rem;
                            `}

                            .city-title{
                                text-transform: uppercase;
                                font-weight:900;
                                letter-spacing:0.1rem;
                                margin:1rem 0;
                            }

                            .city-btn{
                                h5{
                                    font-weight:400;
                                }
                            }

                            button{
                                display: flex;
                                align-items: center;
                                text-transform: uppercase;
                                white-space: nowrap;

                                .selection{
                                    width: 1em;
                                    height: 1em;
                                    margin-right: 1em;
                                    border: ${props => props.white ? '1px solid #000' : '1px solid #ffffff'};
                                }
                            }
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
                        color: ${props => props.white ? '#000' : '#ebebeb'};
                        border: ${props => props.white ? '1px solid #000' : '1px solid #ebebeb'};
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

        .btn{
            border: ${props => props.white ? '1px solid #000' : '1px solid #ffffff'};
            padding: 1em 5em;
            text-transform: uppercase;
            transition: all 150ms ease-out;

            :hover{
                background: ${props => props.white ? '#000' : '#ffffff'};
                color: ${props => props.white ? '#fff' : 'rgb(28,36,43)'};
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
        }

        .green{
            color: #51BC24; 
            position: absolute; 
            right: 0;
            margin-top: 1rem;
        }
    }
`