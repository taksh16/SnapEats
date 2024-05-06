import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import StoreContextProvider from './context/StoreContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StoreContextProvider>
        <App />
    </StoreContextProvider>
    </BrowserRouter>
)
