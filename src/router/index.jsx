import { createBrowserRouter } from 'react-router-dom'

import Login from "../components/templates/Login"
import Home from "../components/templates/Home"
import Register from "../components/templates/Register"
import Mural from "../components/templates/Mural"
import SearchPage from "../components/screens/SearchPage"

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
])

export default router
