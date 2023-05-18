import React from 'react'
import {BrowserRouter} from "react-router-dom"
import {UserProvider} from "./Context"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
           <App />
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

