import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/homepage/Homepage'
import Friends from './pages/friends/Friends'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router/dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
