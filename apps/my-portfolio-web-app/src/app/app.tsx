import { Routes, useSearchParams } from 'react-router-dom'

import { portfolioRoutes, TabLinks } from '@mono-universe/frontend/portfolio/web'
import { OverlayProvider } from 'react-aria'
import { GlobalStyle, StyledMonoBox, StyledRootBox } from './styles'
import {
  MonoButton,
  MonoFlexBox,
  MonoGridBox,
  MonoShowHideBox,
  MonoModal,
  MonoText,
  portfolioTheme,
} from '@mono-universe/frontend/shared/design-system'
import styled, { ThemeProvider } from 'styled-components'
import { acmeRoutes } from '@mono-universe/frontend/acme'
import { estimateRoutes } from '@mono-universe/frontend/estimate'

export const StyledOverlayProvider = styled(OverlayProvider)(() => ({ height: '100%' }))

function App() {
  const [, setSearchParams] = useSearchParams()
  const allRoutes = [...portfolioRoutes, ...acmeRoutes, ...estimateRoutes]

  const handleOnMenuClick = () => {
    setSearchParams({ name: 'prototype', pos: 'right' })
  }

  return (
    <ThemeProvider theme={portfolioTheme}>
      <StyledOverlayProvider>
        <GlobalStyle />
        <StyledRootBox>
          <MonoFlexBox variant="flexRow" justifyContent="space-between" alignItems="center">
            <MonoText variant="display">Ratnesh Murugesan</MonoText>
            <MonoShowHideBox variant="small">
              <MonoButton onPress={handleOnMenuClick}>Menu</MonoButton>
            </MonoShowHideBox>
            <MonoShowHideBox variant="default">
              <MonoFlexBox variant="flexRow" justifyContent="space-between" alignItems="center">
                <TabLinks />
              </MonoFlexBox>
            </MonoShowHideBox>
          </MonoFlexBox>
          <MonoGridBox
            justifyContent="flex-start"
            minWidth={0}
            minHeight={0}
            gridTemplateColumns="1fr"
          >
            <Routes>{allRoutes}</Routes>
          </MonoGridBox>
        </StyledRootBox>
        <MonoModal
          name="side-menu-modal"
          title="🚀"
          childComponent={
            <StyledMonoBox>
              <TabLinks />
            </StyledMonoBox>
          }
        />
      </StyledOverlayProvider>
    </ThemeProvider>
  )
}

export default App
