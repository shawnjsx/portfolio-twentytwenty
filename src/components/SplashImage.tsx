import * as React from 'react'
import { TimelineMax, Power4 } from 'gsap'

import HeartSVG from '../static/heart.svg'
import styled from '../utils/styled'

interface Props {
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
}

const Logo = ({ onClick }: Props) => {
  React.useEffect(() => {
    const t = new TimelineMax({ repeat: -1, repeatDelay: 2 })

    t.to('.glitch', 0.1, { skewX: 10, ease: Power4.easeInOut })
      .to('.glitch', 0.04, { skewX: 0, ease: Power4.easeInOut })
      .to('.glitch', 0.04, { opacity: 0 })
      .to('.glitch', 0.04, { opacity: 1 })
      .to('.glitch', 0.04, { x: -20 })
      .to('.glitch', 0.04, { x: 0 })
      .add('split', 0)
      .to('.top', 0.5, { x: -60, ease: Power4.easeInOut }, 'split')
      .to('.bottom', 0.5, { x: 60, ease: Power4.easeInOut }, 'split')
      .to('.glitch', 0.08, { className: '+=redShadow' }, 'split')

      .to('#txt', 0, { scale: 1.1 }, 'split')
      .to('#txt', 0, { scale: 1 }, '+=0.02')

      .to('.glitch', 0.08, { className: '-=redShadow' }, '+=0.09')
      .to('.glitch', 0.03, { className: '+=greenShadow' }, 'split')
      .to('.glitch', 0.03, { className: '-=greenShadow' }, '+=0.01')

      .to('.top', 0.2, { x: 0, ease: Power4.easeInOut })
      .to('.bottom', 0.2, { x: 0, ease: Power4.easeInOut })

      .to('.glitch', 0.02, { scaleY: 1.1, ease: Power4.easeInOut })
      .to('.glitch', 0.04, { scaleY: 1, ease: Power4.easeInOut })
  })

  return (
    <>
      <Heading>shawn sheehan</Heading>
      <Container>
        <Glitch onClick={onClick} className="glitch">
          <img src={HeartSVG} alt="heart" />
        </Glitch>
      </Container>
    </>
  )
}

export default Logo

const Container = styled.div`
  width: 362px;
  height: auto;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  position: relative;
`

const Glitch = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 4em;
  font-weight: 600;
  z-index: 2;
`

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 8rem;
  text-align: center;
  z-index: 1;
  position: absolute;
  font-family: 'Cormorant Garamond', serif;
  opacity: 0.65;
  text-transform: uppercase;
  font-weight: 200;
`
