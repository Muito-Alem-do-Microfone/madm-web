// import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './style.scss'

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
