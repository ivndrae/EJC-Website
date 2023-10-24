import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import "@fontsource/jetbrains-mono"; // Defaults to weight 400
import "@fontsource/jetbrains-mono/400.css"; // Specify weight
import "@fontsource/jetbrains-mono/400-italic.css"; // Specify weight and style

import "@fontsource/lato"; // Defaults to weight 400
import "@fontsource/lato/900.css"; // Specify weight
import "@fontsource/lato/400-italic.css"; // Specify weight and style

import "@fontsource/koho"; // Defaults to weight 400
import "@fontsource/koho/400.css"; // Specify weight
import "@fontsource/koho/400-italic.css"; // Specify weight and style

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
