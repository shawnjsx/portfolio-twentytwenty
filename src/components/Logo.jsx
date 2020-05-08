import * as React from 'react'
import { darken } from 'polished'

import styled from '../utils/styled'

const Logo = () => {
  return (
    <LogoElement>
      <span>Hello</span>
    </LogoElement>
  )
}

export default Logo

const LogoElement = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 11em;
  transform: translate(0, -50%);
  opacity: 0.85;
  width: 100%;
  margin: 0;

  span {
    font-size: 11em;
    font-weight: 700;
    letter-spacing: 0;
    display: inline-block;
    margin-top: -0.1em;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 0;

    &:after {
      content: '.';
      color: ${({ theme }) => darken(0.35, theme.colors.red)};
      opacity: 0.85;
    }
  }
`
