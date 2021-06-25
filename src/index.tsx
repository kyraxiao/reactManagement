import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd/dist/antd.css';
import './assets/scssCommon/common.scss'
import AuthRoute from'./routes/index'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AuthRoute></AuthRoute>,
  document.getElementById('root')
);
reportWebVitals();
