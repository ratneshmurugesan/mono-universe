import { useRef } from 'react'
import { useButton } from 'react-aria'
import { ImgIcon, StyledButton } from './styles'
import { ratnesh_mono_asset_icon_lightning_ring } from '../../tokens/_icons.json'

export interface ButtonProps {
  onPress: () => void
  onPressStart?: () => void
  onPressEnd?: () => void
}

export function MonoButton(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  return (
    <StyledButton {...buttonProps} ref={ref}>
      <ImgIcon
        src={`data:image/svg+xml;base64,${ratnesh_mono_asset_icon_lightning_ring}`}
        alt="asset_icon_lightning_ring"
        width={40}
      />
    </StyledButton>
  )
}
