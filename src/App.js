import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title="Signup Form"
          iconElementLeft={
            <IconButton>
              {this.props.showBackNavigation ? (
               
              ) : null}
            </IconButton>
          }
        />
        ) : null}/>
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          Registration Form
        </h2>
        <h3 style={{ color: "green", marginLeft: 20 }}>Signup</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "MEdiumSeaGreen",
            margin: 20
          }}
        >
          <span>NAME: </span> <TextField hintText="Hint Text" />
          <br />
          <span>Email: </span> <TextField hintText="Hint Text" /> <br />
          <span>Contact: </span> <TextField hintText="Hint Text" /> <br />
          <span>Address: </span> <TextField hintText="Hint Text" /> <br />
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
