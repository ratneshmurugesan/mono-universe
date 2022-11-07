import { Outlet } from 'react-router-dom'

import { routeData } from '../../data-access'
import TabLinks from '../shared/tab-links'

export const Home = () => {
  return (
    <div>
      <TabLinks routeData={routeData} />
      <h1>Welcome to Home!</h1>
      <Outlet />
    </div>
  )
}

export default Home
