import * as React from 'react'
import { TimelineMax, Power4 } from 'gsap'

import Logo from './Logo'
import styled from '../utils/styled'

interface Props {
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
}

const SplashImage = ({ onClick }: Props) => {
  React.useEffect(() => {
    const t = new TimelineMax({ repeat: -1, repeatDelay: 2 })

    t.to('.glitch', 0.1, { skewX: 10, ease: Power4.easeInOut })
      .to('.glitch', 0.04, { skewX: 0, ease: Power4.easeInOut })
      .to('.glitch', 0.04, { opacity: 0 })
      .to('.glitch', 0.04, { opacity: 1 })
      .to('.glitch', 0.04, { x: -20 })
      .to('.glitch', 0.04, { x: 0 })
      .add('split', 0)

      .to('#txt', 0, { scale: 1.1 }, 'split')
      .to('#txt', 0, { scale: 1 }, '+=0.02')

      .to('.glitch', 0.02, { scaleY: 1.1, ease: Power4.easeInOut })
      .to('.glitch', 0.04, { scaleY: 1, ease: Power4.easeInOut })
  })

  return (
    <Container>
      <Logo />
      <Glitch onClick={onClick} src={'images/heart.svg'} alt="heart" className="glitch" />
    </Container>
  )
}

export default SplashImage

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
`

const Glitch = styled.img`
  position: absolute;
  width: 362px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
