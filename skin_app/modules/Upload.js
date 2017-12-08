import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    //this.state={param: 'val'}
  }
  render() {
    const { navigate } = this.props.navigation;
    var api = this.props.screenProps.api;
    return(	
      <View>
        <Button
          onPress = {() => navigate('HomeScreen', {api: api})}
          title="Home"
        />
	<Button 
	  onPress = {() => navigate('PredictionResults', {api: api})}
	  title="Upload!"
	/>
      </View>
    );
  }
}
