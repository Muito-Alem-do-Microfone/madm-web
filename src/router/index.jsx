import { createBrowserRouter } from 'react-router-dom'

import Login from "../components/screens/Login"
import Home from "../components/screens/Home"
import Register from "../components/screens/Register"
import Mural from "../components/screens/Mural"
import SearchPage from "../components/screens/SearchPage"
import ProfileScreen from '../components/screens/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/mural',
    element: <Mural />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/profile',
    element: <ProfileScreen />,
  },
])

export default router
