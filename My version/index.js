import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './Context'
import './CSS/index.css'
import './CSS/sidebar.css'
import './CSS/cocktailList.css'
import './CSS/contact-about.css'
import './CSS/cocktail.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>
)