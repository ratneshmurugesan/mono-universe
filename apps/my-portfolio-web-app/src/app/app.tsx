import { BrowserRouter as Router, Routes } from 'react-router-dom'

import { portfolioShellRoutes, TabLinks } from '@mono-universe/frontend/portfolio/web'

export function App() {
  const allRoutes = [...portfolioShellRoutes]

  return (
    <Router>
      <TabLinks />
      <Routes>{allRoutes}</Routes>
    </Router>
  )
}

export default App
