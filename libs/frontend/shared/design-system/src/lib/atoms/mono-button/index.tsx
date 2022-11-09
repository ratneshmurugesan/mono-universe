import { ReactNode, useRef } from 'react'
import { useButton } from 'react-aria'
import { StyledButton } from './styles'

export interface ButtonProps {
  children: ReactNode
  onPress: () => void
}

export function MonoButton(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { children }: { children: ReactNode } = props
  return (
    <StyledButton {...buttonProps} ref={ref}>
      {children}
    </StyledButton>
  )
}
