import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <h2>Registration Form</h2>
        <h3 style={{ color: "green" }}>Signup</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "MEdiumSeaGreen"
          }}
        >
          <span>NAME: </span> <TextField hintText="Hint Text" />
          <br />
          <span>Email: </span> <TextField hintText="Hint Text" /> <br />
          <span>Contact: </span> <TextField hintText="Hint Text" /> <br />
          <span>Address: </span> <TextField hintText="Hint Text" /> <br />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
