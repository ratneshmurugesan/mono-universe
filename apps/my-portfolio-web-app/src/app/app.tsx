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
          <MonoBox m="20px">
            <MonoText variant="display">Ratnesh Murugesan</MonoText>
            <MonoFlexBox variant="flexRow" justifyContent="space-between" alignItems="center">
              <TabLinks />
            </MonoFlexBox>
            <MonoGridBox gridColumn="span 2" justifyContent="flex-start">
              <Routes>{allRoutes}</Routes>
            </MonoGridBox>
          </MonoBox>
        </Router>
      </OverlayProvider>
    </ThemeProvider>
  )
}

export default App
