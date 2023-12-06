import React from "react"
import CookieConsent from "react-cookie-consent"

const Cookies = () => {

    return(
        <CookieConsent
            location='bottom'
            buttonText='Aceitar'
            cookieName='cookie'
            style={{ 
                background: '#1d252c',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: '1px solid #fff'
            }}
            contentStyle={{
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '11px',
                lineHeight: '15px',
                color: '#fff',
                maxWidth: 'fit-content',
                textAlign: 'justify'
            }}
            buttonStyle={{ 
                color: '#1d252c',
                background: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '11px',
                lineHeight: '15px',
                padding: '10px 20px'
            }}
            expires={31}
        >
            Este site utiliza cookies para permitir uma melhor experiência por parte do utilizador. Ao navegar no site estará a consentir a sua utilização.
        </CookieConsent>
    )
}

export default Cookies