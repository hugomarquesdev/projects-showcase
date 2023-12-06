import { css } from 'styled-components'

//MEDIA QUERIES
    export const breakpoint = {
        xxl:'1400px',
        xl:'1200px',
        l:'900px',
        m:'768px',
        s:'500px'
    }

    export const media = {
        xxl: (...args) =>
        css`
            @media screen and (max-width: ${breakpoint.xxl}) {
                ${css(...args)}
            }
        `,
        xl: (...args) =>
        css`
            @media screen and (max-width: ${breakpoint.xl}) {
                ${css(...args)}
            }
        `,
        l: (...args) =>
            css`
            @media screen and (max-width: ${breakpoint.l}) {
                ${css(...args)}
            }
        `,
        m: (...args) =>
            css`
            @media screen and (max-width: ${breakpoint.m}) {
                ${css(...args)}
            }
        `,
        s: (...args) =>
            css`
            @media screen and (max-width: ${breakpoint.s}) {
                ${css(...args)}
            }
        `
    }
// ---

// COLORS
    export const color = {
        white: `#FFF`,
        black: `#000`,
        yellow: `#F2AF00`,
        grey: `#FFFFFF4D`,
        lightGrey: `#FFFFFFCC`
    }
// ---