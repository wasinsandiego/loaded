import React from 'react'
import { css, Global } from '@emotion/core'

export const textBase = `
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.2px;
`

export const thinText = `
  ${textBase}
  font-weight: 100;
`

export const medText = `
  ${textBase}
  font-weight: 400;
`

export const boldText = `
  ${textBase}
  font-weight: 800;
`

export const secondaryText = `
  color: #888;
`

const GlobalStyles = () => (
  <Global styles={css`
    html, body {
      width: 100%;
      height: 100%;
    }

    body {
      ${textBase}
      color: #3e3e3e;
    }

    h1, h2, h3 {
      font-weight: 400;
    }

    p {
      font-weight: 100;
      font-size: 14px;
    }

  `} />
)



export default GlobalStyles
