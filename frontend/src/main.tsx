import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './ui/fonts.css'
// import { SearchContextProvider } from "./contexts/SearchContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <SearchContextProvider> */}
    <App />
    {/* </SearchContextProvider> */}
  </React.StrictMode>
)
