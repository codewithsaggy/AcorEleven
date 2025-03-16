import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/bootstrap.min.css";
import "./fonts/icomoon/style.css";
import "./fonts/flaticon/font/flaticon.css"
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
