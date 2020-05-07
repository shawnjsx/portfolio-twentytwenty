import styled, { CreateStyled } from '@emotion/styled'

export interface Theme {
  colors: {
    background: string
    gray: string
    black: string
    white: string
    red: string
    attrs: {
      str: string
      agi: string
      int: string
    }
  }
  fonts: {
    body: string
    headings: string
  }
  fontSizes: {
    body: string
    h1: string
    h2: string
    h3: string
    h4: string
  }
  breakpoints: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  widths: {
    md: string
    lg: string
    xl: string
  }
}

export default styled as CreateStyled<Theme>
