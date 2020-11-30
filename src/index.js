import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './asset/style.css'
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
            <App />
        </CookiesProvider>
        
    </React.StrictMode>,
    document.getElementById('root')
);