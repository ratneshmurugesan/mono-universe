import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>Welcome to Home!</h1>
      <Outlet />
    </div>
  )
}
