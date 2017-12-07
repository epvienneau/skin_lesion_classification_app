import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateProfile from './CreateProfile.js'
import EditProfile from './EditProfile.js'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EditProfile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
