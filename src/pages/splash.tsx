import * as React from 'react'
import { keyframes } from '@emotion/core'
import gsap from 'gsap'
import { useTransition, useTransitionHistory } from 'react-route-transition'

import SplashImage from '../components/SplashImage'
import styled from '../utils/styled'

const SplashPage: React.FunctionComponent = () => {
  const history = useTransitionHistory()

  const [isPlaying, setIsPlaying] = React.useState(false)

  useTransition({
    handlers: [
      {
        path: '/',
        onEnter: async () => {
          await gsap
            .timeline()
            .fromTo(
              '[data-home-main] > *, [data-home-footer]',
              { opacity: 0, y: 20 },
              { duration: 0.6, stagger: 0.125, y: 0, opacity: 1 }
            )
        },
        onLeave: async () => {
          await gsap.timeline().to('[data-home-main] > *, [data-home-footer]', {
            duration: 0.6,
            stagger: 0.125,
            opacity: 0,
            y: -20,
          })
        },
      },
    ],
  })

  const toggleAudio = () => {
    setIsPlaying(!isPlaying)
  }

  const handleRoute = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    history.push('/about')
  }

  return (
    <Container>
      <SplashImage onClick={handleRoute} />
      <AudioHint onClick={toggleAudio}>
        <span>{!isPlaying ? 'Play' : 'Stop'} music,</span> headphone recommended
      </AudioHint>
    </Container>
  )
}

export default SplashPage

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: calc(100% - 3rem - 4rem - 2 * 85px);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: calc(100% - 6rem);
  }
`

const blinking = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
`

const AudioHint = styled.p`
  position: absolute;
  left: 50%;
  font-size: 0.875rem;
  white-space: nowrap;
  bottom: 3rem;
  transform: translateX(-50%);
  animation: ${blinking} 1.9s linear 0s infinite;
  font-size: 1rem;
  bottom: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Roboto', sans-serif;

  span {
    color: ${({ theme }) => theme.colors.red};
    opacity: 0.65;
  }
`
