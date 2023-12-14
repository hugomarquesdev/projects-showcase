import React, { useState } from "react"
import styled from "styled-components"
import { media } from "./Styles"
import { toggleNewsletter } from "../state/app"
import { connect } from "react-redux"

import close from "../images/nav/close-btn.svg"

const Newsletter = ({ dispatch }) => {
  const [, setFirstName] = useState("")
  const [, setLastName] = useState("")
  const [, setEmail] = useState("")
  const [success] = useState()

  function changeEmailHandler(event) {
    setEmail(event.target.value)
  }
  function changeFirstNameHandler(event) {
    setFirstName(event.target.value)
  }
  function changeLastNameHandler(event) {
    setLastName(event.target.value)
  }

  return (
    <StyledNewsletter>
      <div className="modal">
        <img
          src={close}
          className="close-btn"
          alt="Fechar"
          onClick={() => dispatch(toggleNewsletter(false))}
        />

        <div className="title-container">
          <h3
            className="title"
            dangerouslySetInnerHTML={{
              __html: "Subscribe a<br/> our Newsletter",
            }}
          ></h3>
          <span className="subtitle">to keep updated.</span>
        </div>

        <form>
          <label className="label-first-name">
            <h4 className="uppercase">First Name</h4>
            <input
              type="text"
              name="FNAME"
              id="first-name"
              onChange={changeFirstNameHandler}
              required
            />
          </label>
          <label className="label-last-name">
            <h4 className="uppercase">Last Name</h4>
            <input
              type="text"
              name="LNAME"
              id="last-name"
              onChange={changeLastNameHandler}
              required
            />
          </label>
          <label className="label-email">
            <h4 className="uppercase">Email</h4>
            <input
              type="email"
              name="EMAIL"
              id="email"
              onChange={changeEmailHandler}
              required
            />
          </label>

          <span className="terms">
            BY CHOOSING TO SEND YOUR MESSAGE, YOU AGREE TO AND ACCEPT THE TERMS
            AND CONDITIONS, AS WELL AS THE PRIVACY POLICY.
          </span>

          <div className="button">
            <button className="btn">Subscribe</button>
          </div>
        </form>

        {success === true ? (
          <div className="success">
            <p
              className="message"
              dangerouslySetInnerHTML={{
                __html: "Thanks for subscribing<br/> our Newsletter.",
              }}
            ></p>
            <div
              className="close"
              onClick={() => dispatch(toggleNewsletter(false))}
            >
              <span>Fechar</span>
              <img src={close} className="close-btn-sucess" alt="Fechar" />
            </div>
          </div>
        ) : (
          success === false && (
            <p className="error">
              ✗ An error occurred during subscription. Please try again.
            </p>
          )
        )}
      </div>
    </StyledNewsletter>
  )
}

export default connect()(Newsletter)

const StyledNewsletter = styled.div`
  position: fixed;
  z-index: 99;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;

  .modal {
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    width: 100%;
    max-width: 1024px;
    box-sizing: border-box;
    padding: 5rem 5%;
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);

    .close-btn {
      filter: invert(1);
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      max-width: 15px;
      cursor: pointer;
    }

    .title-container {
      text-align: center;
      margin-bottom: 3rem;

      .title {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }
    }

    form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 2rem 5%;

      ${media.l`
                grid-template-columns:1fr;
            `}

      label {
        display: flex;
        align-items: center;
        width: 100%;

        h4 {
          white-space: nowrap;
        }

        .uppercase {
          text-transform: uppercase;
        }

        input {
          margin-left: 1rem;
          width: 100%;
          background: none;
          border: none;
          border-bottom: solid 1px;
          color: #000;

          :focus {
            outline: none;
          }
        }
      }

      .label-email {
        grid-column: 1 / 2;

        ${media.l`
                    grid-column: unset;
                `}
      }

      .terms {
        grid-row-start: 3;

        ${media.l`
                    grid-row-start: unset;
                `}
      }

      .terms {
        font-weight: 300;
        text-transform: uppercase;
        font-size: 0.7rem;
      }

      .button {
        grid-row-start: 3;

        ${media.l`
                    grid-row-start: unset;
                `}

        .btn {
          border: 1px solid #000;
          padding: 1em 5em;
          text-transform: uppercase;
          transition: all 150ms ease-out;
          margin-left: auto;

          ${media.l`
                        margin:0 auto;
                    `}

          :hover {
            background: #000;
            color: #fff;
          }
        }
      }
    }

    .success {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .message {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .close {
        cursor: pointer;
        display: flex;
        align-items: center;

        span {
          text-transform: uppercase;
          margin-right: 0.5rem;
        }

        .close-btn-sucess {
          filter: invert(1);
          max-width: 15px;
        }
      }
    }

    .error {
      text-align: center;
      margin-top: 2rem;
    }
  }
`
