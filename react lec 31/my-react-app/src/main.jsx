import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import { Home } from './App.jsx'
// import Home1 from './Home1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Home1 /> */}
  </StrictMode>,
)
