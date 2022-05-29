import { useRef } from 'react'
import styled from 'styled-components'
import { useButton } from 'react-aria'
import { AriaButtonProps } from '@react-types/button'

const StyledButton = styled.button``

export function Button(props: AriaButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { children } = props
  return (
    <StyledButton {...buttonProps} ref={ref}>
      {children}
    </StyledButton>
  )
}

export default Button
