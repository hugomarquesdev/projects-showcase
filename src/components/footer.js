import { Link } from "gatsby"
import React from "react"
import { Image } from "./Images"
import { media } from "./Styles"

import styled from "styled-components"
import Form from "./FormCasa"

import logo from "../images/logo-white.svg"
import face from "../images/homeMenu/facebook-logo.svg"
import insta from "../images/homeMenu/instagram-logo.svg"
import tube from "../images/homeMenu/youtube-symbol.svg"
import linked from "../images/homeMenu/linked.svg"
import pt2020 from "../images/pt2020w.png"

const Footer = ({ form, hideForm }) => {
  return (
    <>
      {!hideForm && <Form data={form} />}
      <StyledFooter>
        <div className="footer">
          <div className="logo-social" id="logo-social">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Home Simple" />
              </Link>
            </div>
            <div className="social">
              <span>Siga-nos em: </span>
              <div className="social-icons">
                <a
                  href="https://github.com/hugomarquesdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={face} alt="Facebook" />
                </a>
                <a
                  href="https://github.com/hugomarquesdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={insta} alt="Instagram" />
                </a>
                <a
                  href="https://github.com/hugomarquesdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tube} alt="Youtube" />
                </a>
                <a
                  href="https://github.com/hugomarquesdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linked} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt2020" id="pt2020">
            <a
              href="https://github.com/hugomarquesdev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pt2020} alt="PT2020" />
            </a>
          </div>
          <div className="contacts" id="contacts">
            <div className="address">
              <p>
                742 Evergreen Terrace, Springfield
                <br />
                Quinta do Loureiro
                <br />
                Maple County, ZIP 12345
              </p>
            </div>
            <div className="email-number">
              <a href="https://github.com/hugomarquesdev">
                <p>mail@mail.pt</p>
              </a>
              <a href="https://github.com/hugomarquesdev">
                <p>+351 123 456 789</p>
              </a>
            </div>
          </div>
          <div className="livro-reclamacoes" id="livro-reclamacoes">
            <a
              href="https://github.com/hugomarquesdev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="icon_livro_reclamacoes_cinzapu.png"
                alt="Livro de Reclamações"
              />
            </a>
          </div>
        </div>

        <div className="bottom-footer">
          <a
            href="https://github.com/hugomarquesdev"
            target="_blank"
            rel="noreferrer"
          >
            <p>Created By: hugomarquesdev</p>
          </a>
        </div>
      </StyledFooter>
    </>
  )
}

export default Footer

const StyledFooter = styled.footer`
  background-color: #030303;
  color: #c1c5c8;
  padding: clamp(50px, 10vw, 90px) 7.3%;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  line-height: 1.3rem;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3%;

    ${media.xxl`
            #logo-social{
                grid-area:logo
            }
            #pt2020{
                grid-area:pt2020
            }
            #contacts{
                grid-area:contacts
            }
            #livro-reclamacoes{
                grid-area:livro
            }

            display:grid;
            grid-template-areas:'logo contacts''pt2020 livro';
            grid-template-columns:repeat(2,1fr);
            gap: 3rem 3%;
        `}

    ${media.m`
            grid-template-areas:'logo' 'contacts''pt2020' 'livro';
            grid-template-columns:1fr;
        `}

        .logo-social {
      .logo {
        img {
          max-width: 120px;
          width: 100%;
        }
      }

      .social {
        margin-top: 1.5rem;

        .social-icons {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 1rem;

          a {
            display: flex;

            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }

    .pt2020 {
      img {
        max-width: 350px;
        width: 100%;
      }
    }

    .livro-reclamacoes {
      .image {
        width: 150px;
        margin-left: auto;

        ${media.m`
                    margin-left:unset;
                `}
      }
    }

    .contacts {
      text-align: right;

      ${media.m`
                text-align:left;
            `}

      .email-number {
        margin-top: 1rem;

        a {
          margin-left: auto;

          ${media.m`
                        margin-left:unset;
                    `}
        }
      }
    }
  }

  .bottom-footer {
    padding-top: clamp(20px, 5vw, 30px);
    display: flex;
    justify-content: flex-end;

    ${media.m`
            justify-content: flex-start;
        `}
  }
`
