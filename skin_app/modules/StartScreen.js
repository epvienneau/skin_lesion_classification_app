import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';


export default class StartScreen extends Component {
  _on_press_enter(){
      Alert.alert('Entering...!');
  }
  _on_press_profile(){
      Alert.alert('Sorry, VIP only...!');
  }

constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {password: ''};
  }

  render() {
    const { navigate } = this.props.navigation;

    let logo = {
      uri: 'http://aspirehealthkc.com/wp-content/uploads/2017/05/health_on_the_net.jpg'
    };

    var api =  this.props.screenProps.api;

    return (
      <ScrollView style={{padding: 70}}>
          <Text style={styles.titleText}> Skin Classification App</Text>
        <Text style={{fontSize: 20, fontFamily: 'Verdana'}}>Log In:</Text>
        <TextInput
          style={{height: 50}}
          placeholder="Username"
          onChangeText={(text) => this.setState({username: text},
              () => console.log(this.state.username))}
        />
          <TextInput secureTextEntry={true}
          style={{height: 50}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text},
              () => console.log(this.state.password))}
        />
        <Text style={{fontSize: 10, fontFamily: 'Verdana', color: 'red'}}>
            {this.state.valid}
        </Text>
          <Button
              onPress = {() => checklogin(this.state.username, this.state.password, api, navigate, this)}
              title="Enter"
           />
          <Button
              onPress = {() => navigate('CreateProfile')}
              title="Create New Profile"
           />

          <Image source={logo} style={{width: 650, height: 500}} />
      </ScrollView>
    );
  }
}

function checklogin(username, password, api, navigate, Screen){
    //api.post('/checklogin', {"username": username,
    //"password": password})
    //    .then
    if (username != undefined)
    {
        api.post('/checklogin', {
            username: username,
            password: password,
        })
            .then((data) => {
                Screen.setState({valid: data.data},
                    () => console.log(Screen.state.valid),
                )
            })
            .then(() => {
                if (Screen.state.valid == 'YES') {
                    navigate('HomeScreen')
                }
            })
    }
    else{
        Screen.setState({valid: 'Please input a username'})
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
