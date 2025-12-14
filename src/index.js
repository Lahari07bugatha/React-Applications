import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Api from './Api';
import Ap from './Ap';
import Calculs from './Calculs'
import './Style.css'

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
   <Api />
    <Ap/>
    <Calculs/>
</>
  // </React.StrictMode>
);
// root.render(
//   <Ap/>
// )
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
