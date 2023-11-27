import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Routes from './Routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
