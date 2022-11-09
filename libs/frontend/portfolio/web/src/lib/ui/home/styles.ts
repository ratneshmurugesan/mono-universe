import styled from 'styled-components'

import { MonoGridBox, MonoFlexBox } from '@mono-universe/frontend/shared/design-system'

export const StyledMonoGridBox = styled(MonoGridBox)`
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 0;
`

export const StyledMonoFlexBox = styled(MonoFlexBox)`
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 0;
`
