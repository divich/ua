import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      address: ""
    };
  }
  handleName = (event, name) => {
    this.setState({
      name: name
    });
  };
  handleEmail = (event, mail) => {
    this.setState({
      email: mail
    });
  };
  handleContact = (event, con) => {
    this.setState({
      contact: con
    });
  };
  handleAddress = (event, addr) => {
    this.setState({
      address: addr
    });
  };
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title="Registration Form"
          iconElementLeft={
            <IconButton>
              {this.props.showBackNavigation ? (
                <ArrowBack
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.goBack();
                  }}
                />
              ) : null}
            </IconButton>
          }
        />

        <h3 style={{ color: "green", marginLeft: 20 }}>Signup</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "MEdiumSeaGreen",
            margin: 20
          }}
        >
          <span>NAME: </span>{" "}
          <TextField
            hintText="Enter name"
            value={this.state.name}
            onChange={this.handleName}
          />
          <br />
          <span>Email: </span>
          <TextField
            hintText="Enter email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <br />
          <span>Contact: </span>
          <TextField
            type="number"
            hintText="Enter contact"
            value={this.state.contact}
            onChange={this.handleContact}
          />
          <br />
          <span>Address: </span>
          <TextField
            hintText="Enter address"
            value={this.state.address}
            onChange={this.handleAddress}
          />
          <br />
        </div>
        <RaisedButton
          label="Submit"
          primary={true}
          style={{ marginLeft: 50 }}
        />
      </MuiThemeProvider>
    );
  }
}
export default App;
