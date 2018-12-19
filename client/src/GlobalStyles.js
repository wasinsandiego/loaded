import React from 'react'
import { css, Global } from '@emotion/core'

const GlobalStyles = () => (
  <Global styles={css`
    html, body {
      width: 100%;
      height: 100%;
    }

    body {
      font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3 {
      font-weight: 400;
    }

    p {
      font-weight: 100;
    }

  `} />
)

export default GlobalStyles
