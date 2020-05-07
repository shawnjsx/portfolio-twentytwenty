import { Theme } from '../utils/styled'
import colors from './colors'

const theme: Theme = {
  colors: {
    background: colors.white,
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    red: colors.red,
    attrs: {
      str: '#f44336',
      agi: '#39d402',
      int: '#01a9f4',
    },
  },
  fonts: {
    headings: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  fontSizes: {
    body: '14px',
    h1: '2.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    h4: '1.25rem',
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  widths: {
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
}

export default theme
