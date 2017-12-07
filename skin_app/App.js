import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';

import HomeScreen from './modules/HomeScreen';
import Profile from './modules/Profile';

const App = StackNavigator({
        Home: { screen: HomeScreen },
        Profile: { screen: Profile },
},
    );

export default App;
