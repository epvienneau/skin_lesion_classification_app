import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableHighlight } from 'react-native';


export default class Profile extends Component {
    render() {
        const { navigate } = this.props.navigation;
        let im = {
            uri: "http://s4.thingpic.com/images/qX/PeLog95AZW23TJ28zWNvJe8H.jpeg"
        };
        return(
            <ScrollView style={{padding: 70}}>

                <Text style={styles.titleText}> Home</Text>
                <Text style={styles.baseText}> Upload History</Text>
                <View style = {styles.thumbnail}>
                    <TouchableHighlight
                        onPress={() => Alert.alert('Navigating to PredictionResults')}
                    >
                        <Image source={im} style={{width: 100, height: 100}} />
                    </TouchableHighlight>
                    <Text>Date Captured:</Text>
                    <Text>User Defined Tag:</Text>
                </View>
                <Button title = "Upload New Image"
                    onPress={() => Alert.alert('Navigating to Upload Image Screen')}
                />
                <Button title="Edit Profile"
                    onPress={() => navigate('EditProfile')}
                />
                <Button title="Log Out"
                    onPress={() => navigate('StartScreen')}
                />
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Verdana',
    height: 40,
    fontSize: 20,
  },
  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 50,
    fontWeight: 'bold',
    height: 80,
  },
  buttons: {
    width: 100,
    padding: 3,
  },
  thumbnail: {
      backgroundColor: '#DDDDDD',
      alignItems: 'center',
      width: 200,
  }
});
