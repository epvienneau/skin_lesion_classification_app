import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends Component {
  _on_press_enter(){
      Alert.alert('Entering...!')
  }
  _on_press_profile(){
      Alert.alert('Sorry, VIP only...!')
  }
    constructor(props) {
        super(props);
        this.state = {text: ''}
      }
  render() {
    let pic = {
      uri: 'https://image.freepik.com/free-icon/health-care_318-134428.jpg'
    };

    return (
      <View style={{padding: 70}}>
          <Text style={styles.titleText}> Skin Classification App</Text>
        <Text>Log In:</Text>
        <TextInput
          style={{height: 50}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
          <TextInput
          style={{height: 50}}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
        />
          <Button
              onPress = {this._on_press_enter}
              title="Enter"
           />
          <Button
              onPress = {this._on_press_profile}
              title="Create New Profile"
           />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 50,
    fontWeight: 'bold',
    height: 200,
  },
});