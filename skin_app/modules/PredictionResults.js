import React, { Component } from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios'

export default class PredictionResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {trueDiag: ''};
  }
  render(){
    const { navigate } = this.props.navigation;
    var api = this.props.screenProps.api;
    return(
      <ScrollView style={{padding: 70}}>

      </ScrollView>
  )
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallerText: {
    fontFamily: 'Baskerville',
    fontSize: 20,
  }, 
});
