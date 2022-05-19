import styled from 'styled-components'
import {
  color,
  font,
  motion,
  space,
} from '@mono-universe/design-system/shared/design-tokens'

const customStyle = {
  fontSize: font['size-h4'],
  fontWeight: font['weight-light'],
  padding: space.s,
}

const opacityEffect = {
  color: color['purple-lighter'],
  transition: `color ${motion['duration-fast-02']} ${motion['ease-in-out']} ${motion['duration-fast-01']}`,
  '&:hover': {
    color: color['purple-dark'],
  },
}

/* eslint-disable-next-line */
export interface TextProps {}

const StyledText = styled.div`
  ${customStyle}
  ${opacityEffect}
`

export function Text(props: TextProps) {
  return (
    <StyledText>
      <h1>First Text!</h1>
    </StyledText>
  )
}

export default Text
