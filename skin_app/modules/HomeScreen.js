import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableHighlight } from 'react-native';
import axios from 'axios';

export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            'count': 0
        };
    }

    render() {
        const { navigate } = this.props.navigation;

        let im = {
            uri: "http://s4.thingpic.com/images/qX/PeLog95AZW23TJ28zWNvJe8H.jpeg"
        };

        var api =  this.props.screenProps.api;

        return(
            <ScrollView style={{padding: 70}}>

                <Text style={styles.titleText}>Welcome
                    {' ' + this.props.navigation.state.params.username}!
                </Text>
                <Text style={styles.baseText}> Upload History</Text>
                <View style = {styles.thumbnail}>
                    <TouchableHighlight
                        onPress={() => Alert.alert('Navigating to PredictionResults')}
                    >
                        <Image source={im} style={{width: 100, height: 100}} />
                    </TouchableHighlight>
                    <Text>Date Captured:</Text>
                    <Text>User Defined Tag:</Text>
                    <Text>{this.state.count}</Text>
                </View>
                <Button title = "Upload New Image"
                    onPress={() => navigate('Upload', {api: api})}
                />
                <Button title="Edit Profile"
                    onPress={() => navigate('EditProfile')}
                />
                <Button title="Log Out"
                    onPress={() => navigate('StartScreen')}
                />
                <Button title="Print in Console"//For now it's just testing API, you should get a request counter
                    onPress={() => this.getRepos(api)}
                />
            </ScrollView>
        );

    }

    getRepos(api){
    api.get()
        .then((data) => {
        this.setState({'count': data.data},
            () => console.log(this.state.count))
    });

  //return 6;
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

