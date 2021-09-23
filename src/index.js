import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import AppRouters from './routers/AppRouters'

ReactDOM.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>,
  document.getElementById('root')
);