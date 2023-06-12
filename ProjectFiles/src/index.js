import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import NavigationBar from "./Components/Navigation";
//import Carousels from "./Components/Carousels";
//import NewReleasesFiction from "./Utils/GBooks";
import reportWebVitals from './reportWebVitals';
import {nfr,nnr,nyt} from "./Utils/GBooks"
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(nfr)
console.log(nnr)
console.log(nyt)
root.render(
  <React.StrictMode>
    <NavigationBar />
    {/*<Carousels/>*/}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
