import * as React from 'react'
import { css, Global } from '@emotion/core'

export const GlobalFonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Sofia Pro';
        src: url(fonts/sofia-pro.woff2) format('woff2'), url(fonts/sofia-pro.woff) format('woff');
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
)
