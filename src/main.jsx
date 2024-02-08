import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './Css/bootstrap.min.css';
import './Css/scrollbar.style.css';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>  
    <App />
    </Provider> 
  </>
)
