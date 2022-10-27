import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {UseAuth}  from './UseContent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <UseAuth>
   <App />
   </UseAuth>   
  </React.StrictMode>
);

