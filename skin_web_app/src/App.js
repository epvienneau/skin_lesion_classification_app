import React, { Component } from 'react';
import './App.css';
import CreateProfile from './CreateProfile';
import StartScreen from './StartScreen';
import HomeScreen from './HomeScreen';
import Upload from './Upload';
import axios from 'axios';

const api = axios.create({
    baseURL:'http://vcm-1845.vm.duke.edu'
    });

const START_SCREEN = 'startscreen';
const UPLOAD = 'upload';
const HOME_SCREEN = 'homescreen';
const CREATE_PROFILE = 'create-profile';

class App extends Component {
  state = {
    currentScreen:START_SCREEN,
    username:''
  };

  onScreenChange = (screenID, username) => {
    this.setState({currentScreen:screenID, username:username, api:api});
  };

  render() {
    if (this.state.currentScreen === START_SCREEN){
      return (
        <div>
            <StartScreen onScreenChange={this.onScreenChange} username={this.state.username} api={api}/>
	</div>
      )
    }
    else if (this.state.currentScreen === UPLOAD){
      return (
      <div>
        <Upload onScreenChange={this.onScreenChange} username={this.state.username} api={api}/>
      </div>
      )
    } 
    else if (this.state.currentScreen === HOME_SCREEN){
      return (
        <div>
	    <HomeScreen onScreenChange={this.onScreenChange} username={this.state.username} api={api}/>
	</div>
      )
    }
    else if (this.state.currentScreen === CREATE_PROFILE){
      return (
        <div>
          <CreateProfile onScreenChange={this.onScreenChange} username={this.state.username} api={api}/>
	</div>
      )
    } 
  }
}

export default App;







