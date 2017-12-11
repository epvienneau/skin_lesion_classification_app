import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateProfile from './CreateProfile';
import axios from 'axios';
import Upload from './Upload';

import StartScreen from './StartScreen';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

var api = axios.create({
    baseURL:'http://192.168.0.5:5000'
    });

class App extends Component {
  render() {
    return (
      <div className="App">
	  <CreateProfile/>
	    <Upload/>
	    <StartScreen/>
      </div>
    );
  }
}

export default App;
