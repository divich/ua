import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from 'material-ui/RaisedButton';
import { users } from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      address: null,
      password: null
    };
  }
  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleUser = () => {
    users
      .add({
        name: this.state.name,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password
      });
  }

  render() {
    return (
      <MuiThemeProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: 20,
          height: '56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',color: 'white',
          backgroundColor: 'grey', width: '100vw' }}
          >
            Register Yourself
          </div>
          <TextField
          name="name"
          onChange={this.handleTextChange}
            hintText="Your Name"
            floatingLabelText="Name"
            floatingLabelFixed={true}
          /><br />

          <TextField
          name="email"
          onChange={this.handleTextChange}
            hintText="Your E-mail"
            floatingLabelText="E-Mail"
            floatingLabelFixed={true}
          /><br />
          <TextField
          name="address"
          onChange={this.handleTextChange}
            hintText="Your Address"
            floatingLabelText="Address"
            floatingLabelFixed={true}
          /><br />
          <TextField
          name="password"
          onChange={this.handleTextChange}
            hintText="password"
            type='password'
            floatingLabelText="Your Password"
            floatingLabelFixed={true}
          /><br />

          <RaisedButton label="Save" onClick={(e) => { e.preventDefault(); this.handleUser(); }} primary={true} />
          
      </div>
        </MuiThemeProvider>
    );
  }
}
export default App;
