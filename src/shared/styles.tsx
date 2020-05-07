import * as React from 'react'
import { css, Global } from '@emotion/core'

export { default as theme } from './theme'

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        user-select: none;
        box-sizing: border-box;
        cursor: none;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-size: 14px;
      }
      body {
        background-color: #000000;
        min-width: 320px;
        overflow: hidden;
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      ::-webkit-scrollbar-track,
      ::-webkit-scrollbar-thumb,
      ::-webkit-scrollbar-thumb:hover {
        background: transparent;
      }
      ::-webkit-scrollbar {
        width: 0;
      }
    `}
  />
)
