import { BrowserRouter as Router, Routes } from 'react-router-dom'

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
import { useReactStately } from '@mono-universe/frontend/shared/hooks'

export const StyledOverlayProvider = styled(OverlayProvider)(() => ({ height: '100%' }))

export function App() {
  const allRoutes = [...portfolioRoutes, ...acmeRoutes]
  const { useOverlayTriggerState } = useReactStately()
  const state = useOverlayTriggerState({ type: 'dialog' })

  return (
    <ThemeProvider theme={portfolioTheme}>
      <StyledOverlayProvider>
        <GlobalStyle />
        <Router>
          <StyledRootBox>
            <MonoFlexBox variant="flexRow" justifyContent="space-between" alignItems="center">
              <MonoText variant="display">Ratnesh Murugesan</MonoText>
              <MonoShowHideBox variant="small">
                <MonoButton onPress={() => state.open()}>Menu</MonoButton>
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
            title=""
            isOpen={state.isOpen}
            onClose={() => state.close()}
            isDismissable={false}
          >
            <StyledMonoBox>
              <TabLinks />
            </StyledMonoBox>
          </MonoModal>
        </Router>
      </StyledOverlayProvider>
    </ThemeProvider>
  )
}

export default App
