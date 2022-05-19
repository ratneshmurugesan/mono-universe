import styled from 'styled-components'

/* eslint-disable-next-line */
export interface ColorProps {}

const StyledColor = styled.div`
  color: pink;
`

export function Color(props: ColorProps) {
  return (
    <StyledColor>
      <h1>Welcome to Color!</h1>
    </StyledColor>
  )
}

export default Color
