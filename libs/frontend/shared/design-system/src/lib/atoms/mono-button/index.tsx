import { useRef } from 'react'
import { useButton } from 'react-aria'
import { ImgIcon, StyledButton } from './styles'
import tokens from '../../tokens/_icons.json'
const { ratnesh_mono_asset_icon_lightning_ring } = tokens
export interface ButtonProps {
  onPress: () => void
  onPressStart?: () => void
  onPressEnd?: () => void
  children?: string
}

export function MonoButton(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { children } = props
  const { buttonProps } = useButton(props, ref)
  return (
    <StyledButton {...buttonProps} ref={ref}>
      {!children ? (
        <ImgIcon
          src={`data:image/svg+xml;base64,${ratnesh_mono_asset_icon_lightning_ring}`}
          alt="asset_icon_lightning_ring"
          width={40}
        />
      ) : (
        children
      )}
    </StyledButton>
  )
}
