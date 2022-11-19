import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'

import { MonoGridBox } from '@mono-universe/frontend/shared/design-system'

export const StyledMonoGridBox = styled(MonoGridBox)`
  position: relative;
  width: 100%;
  grid-template-columns: auto 1fr auto;
`

export const StyledCanvas = styled(Canvas)`
  position: absolute;
  width: 100%;
  height: 100%;
  aspect-ratio: 3/1;
  grid-column: 2/3;
`
