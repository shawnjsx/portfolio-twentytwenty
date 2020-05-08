import * as React from 'react'

import styled from '../utils/styled'

const DiscoverPage: React.FunctionComponent = () => {
  return <Container>Discover Page</Container>
}

export default DiscoverPage

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
