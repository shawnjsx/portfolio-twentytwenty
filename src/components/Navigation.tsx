import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useTransitionHistory } from 'react-route-transition'
import ClipboardJS from 'clipboard'

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
  const history = useTransitionHistory()

  const { pathname } = useLocation()

  const mailRef = React.useRef<HTMLAnchorElement>(null)
  const helperRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const { current: mail } = mailRef
    const { current: helper } = helperRef

    if (mail) {
      new ClipboardJS(mail.innerHTML)
      handleClipboard()
    }

    function handleClipboard() {
      if (mail && helper) {
        mail.addEventListener('mouseover', () => {
          helper.innerHTML = 'Copy to clipboard'
          helper.style.opacity = '1'
          helper.style.transform = 'translate(-50%, 0)'
        })
        mail.addEventListener('mouseleave', () => {
          helper.innerHTML = ''
          helper.style.opacity = '0'
          helper.style.transform = 'translate(-50%, 10px)'
        })
        mail.addEventListener('click', () => {
          helper.innerHTML = 'Copied!'
          helper.style.opacity = '1'
          setTimeout(() => {
            helper.style.opacity = '0'
            helper.style.transform = 'translate(-50%, 10px)'
          }, 3e3)
        })
      }
    }
  }, [])

  if (pathname !== '/') {
    return (
      <nav className="nav">
        <ControlItem onClick={() => history.push('/')} top left>
          SHAWN SHEEHAN
        </ControlItem>
        <ControlItem onClick={() => history.push('/about')} top right>
          about
        </ControlItem>
        <ControlButton href="https://www.linkedin.com/in/robotjeans/" target="_blank" bottom left>
          linkedin
        </ControlButton>
        <HelperSpan ref={helperRef}></HelperSpan>
        <ControlButton ref={mailRef} bottom right>
          shawnjsx@gmail.com
        </ControlButton>
      </nav>
    )
  }
  return null
}

export default Controls

const ControlItem = styled.a`
  color: #fff;
  mix-blend-mode: difference;
  font-size: 0.875rem;
  position: fixed;
  z-index: 800;
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
  color: #fff;
  mix-blend-mode: difference;
  font-size: 0.875rem;
  position: fixed;
  z-index: 800;
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
  font-weight: 400;
  font-size: 0.68rem;
  text-align: center;
`
