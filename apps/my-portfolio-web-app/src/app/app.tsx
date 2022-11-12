import { BrowserRouter as Router, Routes } from 'react-router-dom'

import { portfolioRoutes, TabLinks } from '@mono-universe/frontend/portfolio/web'
import { OverlayProvider } from 'react-aria'
import { GlobalStyle } from './styles'
import {
  MonoBox,
  MonoFlexBox,
  MonoGridBox,
  MonoText,
  portfolioTheme,
} from '@mono-universe/frontend/shared/design-system'
import { ThemeProvider } from 'styled-components'
import { acmeRoutes } from '@mono-universe/frontend/acme'

export function App() {
  const allRoutes = [...portfolioRoutes, ...acmeRoutes]

  return (
    <ThemeProvider theme={portfolioTheme}>
      <GlobalStyle />
      <OverlayProvider>
        <Router>
          <MonoBox height="95vh" m="20px">
            <MonoGridBox
              justifyContent="space-between"
              alignItems="center"
              gridTemplateColumns="1fr 1fr"
              gridTemplateRows="15% auto"
              height="100%"
            >
              <MonoText variant="display">Ratnesh Murugesan</MonoText>
              <MonoFlexBox variant="flexRow" justifyContent="space-between" alignItems="center">
                <TabLinks />
              </MonoFlexBox>
              <MonoGridBox gridColumn="span 2">
                <Routes>{allRoutes}</Routes>
              </MonoGridBox>
            </MonoGridBox>
          </MonoBox>
        </Router>
      </OverlayProvider>
    </ThemeProvider>
  )
}

export default App
