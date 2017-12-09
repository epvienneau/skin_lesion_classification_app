import React, { Component } from 'react';
import { Image, TouchableHighlight, Picker,  TextInput, ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios'
{/*import get_prediction from ../../bme590_melanoma_detection/get_prediction.py*/}

export default class PredictionResults extends React.Component {
  constructor(props) {
    super(props);
    axios.get('/display_thumbnail/1')
      .then(response => {
          this.setState({
	    image: response.data.image,
	    date: response.data.date,
	    tag: response.data.tag,
	    diam: response.data.diam,
	    pred: response.data.pred,
	    trueDiag: response.data.trueDiag,
	  })
        })
  }
  render(){
    const { navigate } = this.props.navigation;
    var api = this.props.screenProps.api;
    var predTextColor = 'green';
    let im = {uri: "https://www.healthline.com/hlcmsresource/images/Image-Galleries/melanoma/662-Melanoma_Pictures-642x361-Slide2.jpg"};  
    if (this.state.pred === 'Malignant'){predTextColor = 'red'}
    return(
      <ScrollView style={{padding: 70}}>
        <Button 
	  title='Home' 
	  onPress = {() => navigate('HomeScreen')}
	/>
        <Text style={styles.titleText}> Prediction Results </Text>	
	<Text style={{fontFamily: 'Baskerville', fontSize: 20, color: predTextColor}}> {this.state.pred} </Text>
	<View style = {styles.thumbnail}>
	  <TouchableHighlight>
	    <Image source={im} style={{width: 250, height: 150}}/>
	  </TouchableHighlight>
	<Text> Date Captured: {this.state.date}</Text>
	<Text> User-Defined Tag: {this.state.tag}</Text> 
	</View>	
	<Text style={styles.smallerText}> True Diagnosis: {this.state.trueDiag} </Text>
	<Picker
	  selectedValue={this.state.trueDiag}
	  onValueChange={(itemValue, itemIndex) => this.setState({trueDiag: itemValue})}>
	  <Picker.Item label="Unknown" value="Unknown" />
	  <Picker.Item label="Benign" value="Benign" />
	  <Picker.Item label="Malignant" value="Malignant" />
	</Picker>	
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









