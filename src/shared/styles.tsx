import * as React from 'react'
import { css, Global } from '@emotion/core'

export { default as theme } from './theme'

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        user-select: none;
        box-sizing: border-box;
        font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        cursor: none;
      }

      html {
        font-size: 62.5%;
        height: 100%;
      }

      html,
      body {
        -webkit-tap-highlight-color: transparent;
        overflow: hidden;
        width: 100%;
        -webkit-font-smoothing: subpixel-antialiased;
      }

      body {
        background-color: #000000;
        min-width: 320px;
        font: 300 18px/1.4 'Sofia Pro', Helvetica, Arial, sans-serif;
        letter-spacing: 0.02em;
        margin: 0;
      }

      #root {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
      }

      h1 {
        font-familu: 'Sofia Pro';
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
