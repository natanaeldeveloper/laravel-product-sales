import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import globalStyle from './styles/global'
import './styles/style.css'

function App() {

  globalStyle()

  return (
    <RouterProvider router={router} />
  )
}

export default App
