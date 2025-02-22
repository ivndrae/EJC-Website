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

//site tranlation 
import i18n from "./utils/i18n";

// Initialize i18n
i18n.init();

ReactDOM.createRoot(document.body!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
