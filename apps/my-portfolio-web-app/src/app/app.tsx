import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { portfolioShell } from '@mono-universe/frontend/portfolio/web'

export function App() {
  const { portfolioShellRoutes } = portfolioShell
  const portfolioRoutes = portfolioShellRoutes.map(({ id, path, element }) => {
    const Element = element
    return <Route key={id} path={path} element={<Element />} />
  })
  const allRoutes = [...portfolioRoutes]

  return (
    <Router>
      <Routes>{allRoutes}</Routes>
    </Router>
  )
}

export default App
