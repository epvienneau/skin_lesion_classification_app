import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Image from 'react-image-file';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';

class Upload extends Component{
	constructor(props){
		super(props);
		this.state={username:this.props.username,image:'',malignant:'',benign:'',color:'blue',impath: '', api:this.props.api, diam: '', usertag:'',datecap:''}
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
		{'impath':this.state.impath, 'username': this.state.username, 'pred': this.state.malignant})
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
	}
	changeDiam = (event) => {
		this.setState({diam:event.target.value,
		});
	};
	changeTag = (event) => {
		this.setState({usertag:event.target.value,
		});
	};
	setDate = (event,date) =>{
		this.setState({datecap: date,
		});
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
					label="Home"
     					labelPosition="before"
      					style={styles.button}
					onClick={() =>this.props.onScreenChange('homescreen',this.state.username)}
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
				<center><p> If you are on a computer please upload a .jpg or .jpeg file</p></center>
				<center><p> If you are on a phone you are good to go!</p></center>
				<center>
				<div>
				<img src={this.state.image} width="90" height="90"/>
				</div>
				<MuiThemeProvider>
							<center><TextField
								id="Diameter"
								hintText="Diameter of Lesion"
								value={this.state.diam}
								onChange={this.changeDiam}
							/></center>
							<center><TextField
								id="Tag"
								hintText="What Lesion is It?"
								value={this.state.usertag}
								onChange={this.changeTag}
							/></center>
							<center><DatePicker
								hintText="Date Captured"
								value={this.state.datecap}
								onChange={this.setDate}
							/></center>

				</MuiThemeProvider>	
				<p> Probability Malignant {this.state.malignant}</p>
				<p> Probability Benign {this.state.benign}</p>
				</center>	
				<MuiThemeProvider>
							<center><RaisedButton
      							label="Get Prediction"
     							labelPosition="before"
      							style={styles.button}
      							containerElement="label"
							onClick={()=>this.getPrediction(this.state.image)}
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

