/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import styled from '../utils/styled'
import { DescriptionProps } from '../interfaces'

interface Props extends DescriptionProps {
  gridArea: string
}

const Description = ({ data, gridArea }: Props) => {
  return (
    <DescriptionBlock
      css={css`
        grid-area: ${gridArea};
      `}
    >
      <header>
        <h1>Hello I'm Shawn, a Web Developer</h1>
      </header>
      {data.map((d: string, i: number) => (
        <Typography key={i}>{d}</Typography>
      ))}
    </DescriptionBlock>
  )
}

export default Description

const DescriptionBlock = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: calc(100% - 10vw);
  height: 100%;
  margin-left: auto;
  padding-left: 2rem;
  padding-right: 10vw;
  font-family: 'Roboto', sans-serif;

  header {
    h1 {
      font-size: 3vw;
      font-weight: 200;
      line-height: 1.4;
      margin-bottom: 5vw;
      margin-top: 0;
      padding: 0;
    }
  }
`

const Typography = styled.p`
  font-size: 3vw;
  font-weight: 200;
  line-height: 1.4;
  margin-bottom: 5vw;
  font-family: ;
`
