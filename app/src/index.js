import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bar from './Nav.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// This is the main js function that calls other smaller functions within
// the react environment.s

// The .StrictMode tag is a tool for highlighting potential problems
// within development. Does not affect production build
root.render(
  <React.StrictMode> 
    <Bar />
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
