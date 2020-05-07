import * as React from 'react'
import { useTransition } from 'react-route-transition'
import gsap from 'gsap'

import Description from '../components/Description'
import Experience from '../components/Experience'
import data from '../utils/data.json'
import styled from '../utils/styled'

export const GridArea = {
  ABOUT: 'ABOUT',
  SIDE: 'SIDE',
}

const AboutPage: React.FunctionComponent = () => {
  useTransition({
    handlers: [
      {
        path: '/about',
        onEnter: async () => {
          gsap.timeline().fromTo(
            '[data-signin-wrapper] > *',
            { y: 20, opacity: 0 },
            {
              y: 0,
              duration: 0.6,
              stagger: 0.125,
              opacity: 1,
            }
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

  return (
    <GridContainer>
      <Experience data={data.me.experience} gridArea={GridArea.SIDE} />
      <Description data={data.me.description} gridArea={GridArea.ABOUT} />
    </GridContainer>
  )
}

export default AboutPage

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: calc(100% - 3rem - 4rem - 2 * 85px);
  margin-left: auto;
  margin-right: auto;
  padding-top: 25vh;
  padding-bottom: 15vh;
  z-index: 1;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "${GridArea.SIDE} ${GridArea.ABOUT}"
    "${GridArea.SIDE} ${GridArea.ABOUT}";
  

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: calc(100% - 6rem);
  } 
`
