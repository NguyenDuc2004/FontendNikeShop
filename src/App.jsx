
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App
