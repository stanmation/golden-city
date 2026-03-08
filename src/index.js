import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkLightThemeProvider } from './components/dark-light-mode/DarkLightThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkLightThemeProvider>
      <App />
    </DarkLightThemeProvider>
  </React.StrictMode>,
)
