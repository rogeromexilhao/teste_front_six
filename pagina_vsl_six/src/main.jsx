import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import '../src/assets/css/tailwind.css'
import VslPage from './vslPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VslPage/>
  </StrictMode>,
)
