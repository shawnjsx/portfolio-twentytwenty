import * as React from 'react'
import gsap from 'gsap'

import styled from '../utils/styled'

const Cursor: React.FunctionComponent = () => {
  const cursorRef = React.useRef<HTMLDivElement>(null)
  const textRef = React.useRef<HTMLSpanElement>(null)

  const move = React.useCallback((e: MouseEvent) => {
    const { current: cursor } = cursorRef

    gsap.to(cursor, {
      duration: 0,
      left: e.pageX - 45 + 'px',
      top: e.pageY - 45 + 'px',
    })
  }, [])

  React.useEffect(() => {
    const { current: cursor } = cursorRef

    gsap.set(cursor, { scale: 0.175 })

    document.addEventListener('mousemove', move)

    return () => {
      document.removeEventListener('mousemove', move)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    cursorBig()
  }, [])

  function cursorBig() {
    const { current: cursor } = cursorRef
    gsap.to(cursor, { duration: 0.6, scale: 1, ease: 'expo.out' })
  }

  return (
    <CursorDiv ref={cursorRef}>
      <span ref={textRef}></span>
    </CursorDiv>
  )
}

export default Cursor

const CursorDiv = styled.div`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  mix-blend-mode: difference;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  width: 10.71em;
  height: 10.71em;
  border-radius: 50%;
  position: fixed;
  top: -90px;
  left: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.85;

  span {
    opacity: 1;
    visibility: inherit;
  }
`
