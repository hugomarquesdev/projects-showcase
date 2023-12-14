import React from "react"
import PropTypes from "prop-types"

import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import { connect } from "react-redux"

import Footer from "../footer"
import Cookies from "../Cookies"
import FormNewsletter from "../FormNewsletter"
import { toggleNewsletter } from "../../state/app"

import contactIcon from "../../images/nav/contact.svg"
import newsletterIcon from "../../images/nav/newsletter.svg"

import favicon from "../../images/Favicon-01.png"
import Helmet from "react-helmet"

import "./layout.css"

const Layout = ({
  children,
  fourOhFour,
  form,
  openNewsletter,
  dispatch,
  hideForm,
  hideNewsletter,
}) => {
  return (
    <StyledLayout id="top">
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>

      {!hideNewsletter && (
        <div className="popup">
          <a href="#form-footer">
            <img src={contactIcon} alt="Contact" />
          </a>
          <button onClick={() => dispatch(toggleNewsletter(!openNewsletter))}>
            <img src={newsletterIcon} alt="Newsletter" />
          </button>
        </div>
      )}

      <CSSTransition
        in={openNewsletter}
        timeout={250}
        classNames="cta-switch"
        unmountOnExit
      >
        <FormNewsletter />
      </CSSTransition>

      <main>{children}</main>

      {!fourOhFour && <Footer form={form} hideForm={hideForm} />}
      <Cookies />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(
  (state) => ({
    openNewsletter: state.app.openNewsletter,
    news: state.app.news,
  }),
  null
)(Layout)

const StyledLayout = styled.main`
  .popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    right: 1rem;
    bottom: 15vh;
    z-index: 61;

    img {
      filter: invert(1);
    }
  }

  // ANIMAÇÕES
  .cta-switch-enter {
    opacity: 0;
  }
  .cta-switch-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
  .cta-switch-exit {
    opacity: 1;
  }
  .cta-switch-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
`
