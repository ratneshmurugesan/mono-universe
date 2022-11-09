import styled from 'styled-components'

import { MonoGridBox } from '@mono-universe/frontend/shared/design-system'

export const StyledMonoGridBox = styled(MonoGridBox)`
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`
