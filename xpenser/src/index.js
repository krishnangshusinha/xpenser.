import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
/* Icons have been used from Flaticon website. */
/* Github icone have been used from Devicon website */

  
ReactDOM.render(
  <Provider store = {store} >       {/* This Provider that has 'store' attribute in it, and this gives access of Redux store to all the components wrapped within App componenet  */}
    <App/>
  </Provider>,
  document.getElementById('root')
);   