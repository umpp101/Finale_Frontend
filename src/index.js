import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, withRouter} from "react-router-dom"
ReactDOM.render(<Router> <App /> </Router>, document.getElementById('root'));

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
