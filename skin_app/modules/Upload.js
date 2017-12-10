import React, { Component } from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, Button, ImagePickerIOS, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import axios from 'axios'

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: '', date: '', tag: '', diam: ''}
  }
  pressUploadButton = () => {
    // openSelectDialog(config, successCallback, errorCallback);
    axios.post('/upload_image', {image: this.state.image, date: this.state.date, tag: this.state.tag, diam: this.state.diam}).then(
	var response = response.data).then(
	    navigate('PredictionResults',{labels:response['label'] , predictions: response['predictions']))
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
	 ImagePickerIOS.openSelectDialog({}, imageUri => {
      	  this.setState({ image: imageUri });
    	  }, error => console.error(error));
  	 }
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
	<DatePicker
           style={{width: 200}}
           date={this.state.date}
           mode="date"
           placeholder="select date"
           format="YYYY-MM-DD"
           minDate="1900-05-01"
           maxDate="2018-06-01"
           confirmBtnText="Confirm"
           cancelBtnText="Cancel"
           customStyles={{
           dateIcon: {
           position: 'absolute',
           left: 0,
           top: 4,
           marginLeft: 0
           },
           dateInput: {
           marginLeft: 36
           }
          // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />

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
