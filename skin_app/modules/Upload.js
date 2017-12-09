import React, { Component } from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import axios from 'axios'

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: '', date: '', tag: '', diam: ''}
  }
  pressUploadButton = () => {
    axios.post('/upload_image', {image: image, date: date, tag: tag, diam: diam})
    navigate('PredictionResults')
  }
  render() {
    const { navigate } = this.props.navigation;
    var api = this.props.screenProps.api;
    return(
      <ScrollView style={{padding: 70}}>	    
      <View>
          <Button
            onPress = {() => navigate('HomeScreen')}
            title="Home"
          />
	</View>
	<Text style={styles.titleText}> Upload Image</Text>
	<View>
            <Button 
	    onPress = {() => this.pressUplodButton()}
	    title="Upload!"
  	    />
        </View>
	<Text style={styles.smallerText}> Lesion Diameter (mm):</Text> 
	<TextInput
	  style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:5}}
	  onChangeText={(text) => this.setState({diam: text})}
	  placeholder = {'00.00'}
	  value = {this.state.diam}
	/>
	<Text style={styles.smallerText}> Date Image was Captured: </Text>
	<Text style={styles.smallerText}> Lesion Tag </Text>
	<TextInput
	  style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:5}}
	  onChangeText={(text) => this.setState({tag: text})}
	  placeholder = {'e.g., freckle on left hand'}
	  value = {this.state.tag}
	/>	
      </ScrollView>
    );
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
