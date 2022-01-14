import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'default-passive-events' // 阻止控制开鼠标事件警告

import store from './redux/store'

// import zhCN from 'antd/lib/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
// moment.locale('zh-cn')

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} ><App /></Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
