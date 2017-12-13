import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';
import axios from 'axios';

class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {'username':this.props.username,'images':[]}
  }

  render(){
  var api = axios.create({baseURL:"http://152.3.53.222:8000"})
return(
	<MuiThemeProvider>
	 <div>
		<header className="App-header">
                    <h1 className="App-title">Welcome {this.state.username}</h1>
        	</header> <br />
	    </div>	
	  <center><RaisedButton
          label="View History"
          labelPosition="before"
          style={styles.button}
	  onClick={
		  () => {this.getRepos(api,this.state.username)}}
        /></center> <br />
	<center> <RaisedButton
	label="Upload New Image"
	labelPosition="before"
	style={styles.button}
	onClick={()=>{this.props.onScreenChange('upload', this.state.username)}}
	/></center> <br />
       <GridList
         cellHeight={180}
	 style={styles.gridList}
       >
       <Subheader>Image History</Subheader>
        {this.state.images.map((tile)=>(
	  <GridTile
            key={tile}
          >
          <img uri={tile}/>
	 </GridTile>
	))}
       </GridList>
	<center> <RaisedButton
	label="Log Out"
	labelPosition="before"
	style={styles.button}
	onClick={()=>{this.props.onScreenChange('startscreen','')}}
	/></center> <br />

     </MuiThemeProvider> 
   		
  )
  }
getRepos=(api, username)=>{
  api.get('/getImages/'+ username)
  .then((data)=>{
	  console.log(data.data);
	  this.setState({images:data.data})
  });
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

export default HomeScreen;
