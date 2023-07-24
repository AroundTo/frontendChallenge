import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/router'

const App = () => <RouterProvider router={router} />

export default App
