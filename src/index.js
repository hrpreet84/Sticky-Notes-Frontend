import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import History from '../src/components/History';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
<App history={History}/>
  </BrowserRouter>
  , document.getElementById('root'));

// ReactDOM.render(
//   <MyFirstStickyNotes ></MyFirstStickyNotes>,document.getElementById('root')
// );
