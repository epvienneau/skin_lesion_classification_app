import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { UploadField } from '@navjobs/upload';

class Upload extends Component{
	constructor(props){
		super(props);
		this.state={username:this.props.username,image:'',malignant:'',benign:'',color:'blue',impath: '', api:this.props.api}
	}
	uploadFile = (event) => {
		this.setState({image:event.target.value});
		console.log(this.state.image);
		if (parseInt(this.state.malignant)>0.5){
			this.setState({color:'red'})
		}
			else{
				this.setState({color:'green'})}
	};
    getPrediction(){
		console.log('hi');
		const imstring = JSON.stringify({'image':this.state.image});
		this.state.api.post('/prediction',{'image':this.state.image})
			.then((data)=>{this.parseData(data.data), console.log(data.data)})
			.then(() =>
	this.state.api.post('/uploadimage',
		{'impath':this.state.impath, 'username': this.state.username, 'pred': this.state.malignant})//We need to make this so that there is a user logged in (like there is in the react native
					.then((data) => console.log(data.data)))
	}
	onUpload = (files) => {
		const reader = new FileReader();
		const file = files[0];
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			console.log(file);
			this.setState({image: reader.result});
		}
	};
	parseData = (data) => {
		const mal = data['malignant'];
		const ben = data['non malignant'];
		this.setState({malignant: mal, benign: ben});
		this.setState({impath: data['impath']})
	};
	render(){
		
		return(
				<MuiThemeProvider>
						<div>
						<header className="App-header">
                   				 <h1 className="App-title">Upload an Image</h1>
        					</header> <br />
	    					</div>	
					<center><RaisedButton
					label="Get Prediction"
     					labelPosition="before"
      					style={styles.button}
					onClick={() => this.getPrediction(this.state.image)}
      					containerElement="label"
   					/></center>	
				<UploadField onFiles={this.onUpload}>
					<div>
						<MuiThemeProvider>
							<center><RaisedButton
      							label="Choose an Image"
     							labelPosition="before"
      							style={styles.button}
      							containerElement="label"
   							/></center>
						</MuiThemeProvider>
					</div>
				</UploadField>
				<center>
				<div style={{backgroundColor: this.state.color,width:'200px', 
							height:'200px'}}>
				
				<img src={this.state.image} width="90" height="90"/>
				</div>		
				<p> Percent Malignant {this.state.malignant}</p>
				<p> Percent Benign {this.state.benign}</p>
				</center>
				<MuiThemeProvider>
							<center><RaisedButton
      							label="Home"
     							labelPosition="before"
      							style={styles.button}
      							containerElement="label"
							onClick={()=>this.props.onScreenChange('homescreen',this.state.username)}
   							/></center>
						</MuiThemeProvider>

				</MuiThemeProvider>
	
		)
	}
}
const styles = {
  button: {
    margin: 12,
  },
exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
export default Upload;

