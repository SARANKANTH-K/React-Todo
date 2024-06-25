import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Todo from './Todo';
import Function from './Function';
import reportWebVitals from './reportWebVitals';
import Sample from './Sample';
import Signup from './Signup';
import Fetch from './Fetch';
import Gallery from './Gallery';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    {/* <App /> */}
    {/* <Function />
    <Sample /> */}
    {/* <Fetch /> */}
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Function />} />
      <Route path="/sample" element={<Sample />}/>
      <Route path="/fetch" element={<Fetch />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/todo" element={<Todo />}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
