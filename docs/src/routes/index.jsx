import { useRoutes } from 'react-router-dom'
import { publicRoutes } from './public'

const AppRoutes = () => {
  const routes = useRoutes(publicRoutes)

  return routes
}

export default AppRoutes
