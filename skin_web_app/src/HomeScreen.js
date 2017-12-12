import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';
import axios from 'axios';
class HomeScreen extends Component{
	constructor(){
		super();
		this.state = {'username':'','images':[]}
	}
	render(){
		var api = axios.create("http://")
		return(
			<div style={styles.root}>
				<RaisedButton>
					label="View Image History"
					labelPosition="before"
      					style={styles.button}
					onClick={this.getRepos(api,this.state.username)}
				</RaisedButton>
    				<GridList
      					cellHeight={180}
      					style={styles.gridList}
    				>
      				<Subheader>History</Subheader>
      				{this.state.images.map((tile) => (
        			<GridTile
          			 key={tile.img}
       				 >
          			<img src={tile.img} />
        			</GridTile>
      				))}
    				</GridList>
  			</div>
			
		)
	}
	getRepos=(api, username)=>{
   	 api.get('/getImages/' + username)
        .then((data) => {this.setState({images: data.data})})
        .then(() => console.log(this.state.images));
    	}
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
default export HomeScreen;
