import { BrowserRouter as Router, Routes } from 'react-router-dom'

import { portfolioRoutes, TabLinks } from '@mono-universe/frontend/portfolio/web'
import { OverlayProvider } from 'react-aria'
import { GlobalStyle } from './styles'
import {
  MonoBox,
  MonoFlexBox,
  MonoGridBox,
  MonoText,
} from '@mono-universe/frontend/shared/design-system'

export function App() {
  const allRoutes = [...portfolioRoutes]

  return (
    <>
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
    </>
  )
}

export default App
