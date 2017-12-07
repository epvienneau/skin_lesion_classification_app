import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';

import StartScreen from './modules/StartScreen';
import HomeScreen from './modules/HomeScreen';
import CreateProfile from "./modules/CreateProfile";
import EditProfile from "./modules/EditProfile";

const App = StackNavigator({
        StartScreen: { screen: StartScreen },
        HomeScreen: { screen: HomeScreen },
        CreateProfile: { screen: CreateProfile},
        EditProfile: { screen: EditProfile},
},
);
export default App;
