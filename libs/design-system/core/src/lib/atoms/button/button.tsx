import { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { useButton } from 'react-aria'

export interface ButtonProps {
  children: ReactNode
}

const StyledButton = styled.button``

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { children }: { children: ReactNode } = props
  return (
    <StyledButton {...buttonProps} ref={ref}>
      {children}
    </StyledButton>
  )
}

export default Button
