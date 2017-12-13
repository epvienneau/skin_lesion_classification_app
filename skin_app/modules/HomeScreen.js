import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableHighlight } from 'react-native';
import axios from 'axios';

export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            'count': 0,
            'images': [],
        };
    }

    render() {
        const { navigate } = this.props.navigation;


        var api =  this.props.screenProps.api;

        try {
            var username = this.props.navigation.state.params.username;
            //this.getRepos(api, username);
        }
        catch(err){
            username = 'User';
        }

        var photoHolder = [];
        for(var i=0;i<this.state.images.length;i++){
            uri = 'data:image/png;base64,' + this.state.images[i]
            photoHolder.push(
            <View style={styles.thumbnail} key={i}>
                <TouchableHighlight
                    onPress={() => navigate('PredictionResults')}
                >
                    <Image source={{uri: uri}} style={{width: 100, height: 100}}/>
                </TouchableHighlight>
                <Text>Date Captured:</Text>
                <Text>User Defined Tag:</Text>
                <Text>{i}</Text>
            </View>
            )
        }

        return(
            <ScrollView style={{padding: 70}}>

                <Text style={styles.titleText}>Welcome
                    {' ' + username}!
                </Text>
                <Text style={styles.baseText}> Upload History</Text>
                <View>{photoHolder}</View>
                <Button title = "Upload New Image"
                    onPress={() => navigate('Upload', {api: api})}
                />
                <Button title="Edit Profile"
                    onPress={() => navigate('EditProfile')}
                />
                <Button title="Log Out"
                    onPress={() => navigate('StartScreen')}
                />
                <Button title="Show History"//For now it's just testing API, you should get a request counter
                    onPress={() => this.getRepos(api, username)}
                />
            </ScrollView>
        );

    }

    getRepos(api, username){
    api.get('/getImages/' + username)
        .then((data) => {this.setState({images: data.data})})
        .then(() => console.log(this.state.images));
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

