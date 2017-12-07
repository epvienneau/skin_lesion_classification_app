import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';


export default class Profile extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <ScrollView style={{padding: 70}}>
            <Button title="Return Home"
                    onPress={() => navigate('StartScreen')}
            />

            <Text style={styles.titleText}> User Profile Page</Text>
            <Button title="Edit Profile"
                    onPress={() => navigate('EditProfile')}
            />
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
