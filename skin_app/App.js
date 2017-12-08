import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';
import axios from 'axios'
import StartScreen from './modules/StartScreen';
import HomeScreen from './modules/HomeScreen';
import CreateProfile from './modules/CreateProfile';
import EditProfile from './modules/EditProfile';
import Upload from './modules/Upload';

var api = axios.create({
    baseURL:'http://192.168.0.5:5000'
    });

const AppNavigator = StackNavigator({
        StartScreen: { screen: StartScreen },
        HomeScreen: { screen: HomeScreen },
        CreateProfile: { screen: CreateProfile},
        EditProfile: { screen: EditProfile},
	Upload: { screen: Upload},
	},
    );

class App extends Component {
  render() {
    return (
      <AppNavigator screenProps={{api: api}} />
    )
  }
}

export default App;
