import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateProfile from './CreateProfile';
import axios from 'axios';
import Upload from './Upload';
import {Link} from 'react-router';
import StartScreen from './StartScreen';


var api = axios.create({
    baseURL:'http://192.168.0.5:8000'
    });

class App extends Component {
  render() {
    return (
      <div className="App">
	    <Upload/>
	    <StartScreen/>
	  
      </div>
    );
  }
}

export default App;
