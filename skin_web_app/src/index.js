import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Upload from './Upload';
import CreateProfile from './CreateProfile';
import StartScreen from './StartScreen';
import { Router, Route, hashHistory } from 'react-router';
ReactDOM.render
(<App/>, document.getElementById('root'));
registerServiceWorker();
