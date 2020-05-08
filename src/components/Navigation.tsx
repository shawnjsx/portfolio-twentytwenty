import * as React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import useClipBoard from '../hooks/useClipBoard'
import styled from '../utils/styled'

declare module 'react' {
  interface HTMLAttributes<T> {
    top?: boolean
    bottom?: boolean
    left?: boolean
    right?: boolean
  }
}

const Controls: React.FunctionComponent = () => {
  const [copyRef, helperRef] = useClipBoard()

  const { pathname } = useLocation()

  if (pathname !== '/') {
    return (
      <nav className="nav">
        <NavItem to="/" top left>
          Shawn Sheehan
        </NavItem>
        <NavItem to="/about" top right>
          About
        </NavItem>
        <ControlButton href="https://www.linkedin.com/in/robotjeans/" target="_blank" bottom left>
          Linkedin
        </ControlButton>
        <HelperSpan ref={helperRef}></HelperSpan>
        <ControlButton ref={copyRef} bottom right>
          shawnjsx@gmail.com
        </ControlButton>
      </nav>
    )
  }
  return null
}

export default Controls

const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  mix-blend-mode: difference;
  font-size: 0.675em;
  position: fixed;
  z-index: 9999;
  top: ${({ top }) => top && '2rem'};
  bottom: ${({ bottom }) => bottom && '2rem'};
  right: ${({ right }) => right && '2rem'};
  left: ${({ left }) => left && '2rem'};

  @media screen and (min-width: 900px) {
    top: ${({ top }) => top && '3rem'};
    bottom: ${({ bottom }) => bottom && '3rem'};
    right: ${({ right }) => right && '3rem'};
    left: ${({ left }) => left && '3rem'};
  }
`

const ControlButton = styled.a`
  color: ${({ theme }) => theme.colors.white};
  mix-blend-mode: difference;
  font-size: 0.675em;
  position: fixed;
  z-index: 9999;
  font-family: 'Roboto', sans-serif;
  top: ${({ top }) => top && '2rem'};
  bottom: ${({ bottom }) => bottom && '2rem'};
  right: ${({ right }) => right && '2rem'};
  left: ${({ left }) => left && '2rem'};

  @media screen and (min-width: 900px) {
    top: ${({ top }) => top && '3rem'};
    bottom: ${({ bottom }) => bottom && '3rem'};
    right: ${({ right }) => right && '3rem'};
    left: ${({ left }) => left && '3rem'};
  }
`

const HelperSpan = styled.span`
  position: absolute;
  bottom: 5rem;
  right: 2rem;
  font-size: 0.675em;
  text-align: center;
`
