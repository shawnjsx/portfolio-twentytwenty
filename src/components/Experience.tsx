/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import styled from '../utils/styled'
import { ExperienceProps } from '../interfaces'

interface Props extends ExperienceProps {
  gridArea: string
}

const Experience = ({ data, gridArea }: Props) => {
  return (
    <ExperienceBlock
      css={css`
        grid-area: ${gridArea};
      `}
    >
      <ExperienceList>
        {data.map((d: any, i: number) => (
          <li key={i}>
            <Typography>{d.dates}</Typography>
            <Typography>
              {d.title}, {d.company}
            </Typography>
            <Typography>{d.location}</Typography>
          </li>
        ))}
      </ExperienceList>
    </ExperienceBlock>
  )
}

export default Experience

const ExperienceBlock = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100%;
  margin-left: 3rem;
  position: sticky;
`

const ExperienceList = styled.ul`
  opacity: 0.5;
  list-style: none;

  li {
    margin-top: 30px;
    margin-bottom: 25px;

    &:nth-child(1) {
      margin-top: 0;
    }
  }
`

const Typography = styled.p`
  font-size: 0.8125rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.4;
`
