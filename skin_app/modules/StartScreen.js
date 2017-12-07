import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';


export default class StartScreen extends Component {
  _on_press_enter(){
      Alert.alert('Entering...!')
  }
  _on_press_profile(){
      Alert.alert('Sorry, VIP only...!')
  }

    constructor(props) {
        super(props);
        this.state = {username: ''}
      }
  render() {
      const { navigate } = this.props.navigation;
    let pic = {
      uri: 'http://aspirehealthkc.com/wp-content/uploads/2017/05/health_on_the_net.jpg'
    };
    return (
      <ScrollView style={{padding: 70}}>
          <Text style={styles.titleText}> Skin Classification App</Text>
        <Text style={{fontSize: 20, fontFamily: 'Verdana'}}>Log In:</Text>
        <TextInput
          style={{height: 50}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
          <TextInput secureTextEntry={true}
          style={{height: 50}}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
        />

          <Button
              onPress = {() => navigate('HomeScreen')}
              title="Enter"
           />
          <Button
              onPress = {() => navigate('CreateProfile')}
              title="Create New Profile"
           />

          <Image source={pic} style={{width: 650, height: 500}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Verdana',
  },
  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 50,
    fontWeight: 'bold',
    height: 200,
  },
  buttons: {
    width: 100,
    padding: 3,
  },
});
