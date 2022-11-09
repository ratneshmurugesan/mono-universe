import { BrowserRouter as Router, Routes } from 'react-router-dom'

import { portfolioShellRoutes, TabLinks } from '@mono-universe/frontend/portfolio/web'
import { OverlayProvider } from 'react-aria'

export function App() {
  const allRoutes = [...portfolioShellRoutes]

  return (
    <Router>
      <TabLinks />
      <OverlayProvider>
        <Routes>{allRoutes}</Routes>
      </OverlayProvider>
    </Router>
  )
}

export default App
