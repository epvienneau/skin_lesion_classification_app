import React, { Component } from 'react';
import './App.css';
import CreateProfile from './CreateProfile';
import StartScreen from './StartScreen';
import HomeScreen from './Homescreen';
import Upload from './Upload';
import axios from 'axios';

var api = axios.create({
    baseURL:'http://192.168.0.5:8000'
    });

const START_SCREEN = 'startscreen';
const UPLOAD = 'upload';
const HOME_SCREEN = 'homescreen';
const EDIT_PROFILE = 'edit-profile';
const CREATE_PROFILE = 'create-profile';

class App extends Component {
  state = {
    currentScreen:HOME_SCREEN,
    username:''
  } 

  onScreenChange = (screenID, username) => {
    this.setState({currentScreen:screenID, username:username});
  }

  render() {
    if (this.state.currentScreen === START_SCREEN){
      return (
        <div>
            <StartScreen onScreenChange={this.onScreenChange}/>
	</div>
      )
    }
    else if (this.state.currentScreen === UPLOAD){
      return (
      <div>
        <Upload onScreenChange={this.onScreenChange}/>
      </div>
      )
    } 
    else if (this.state.currentScreen === HOME_SCREEN){
      return (
        <div>
	    <HomeScreen onScreenChange={this.onScreenChange}/>
	</div>
      )
    }
    else if (this.state.currentScreen === EDIT_PROFILE){
      return (
        <div>
	  {/*<EditProfile onScreenChange={this.onScreenChange}/>*/}
	  Hello!
	</div>
      )
    }
    else if (this.state.currentScreen === CREATE_PROFILE){
      return (
        <div>
          <CreateProfile onScreenChange={this.onScreenChange}/>
	</div>
      )
    } 
  }
}

export default App;







