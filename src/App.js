import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <h2>Driving license Registration form</h2>
        <span style={{ fontSize: 20, fontWeight: "bold", color: "green" }}>
          Sign up
        </span>
        <TextField
          hintText="Hint Text"
        /><br />
      </div>
        <MuiThemeProvider/>
    );
  }
}
export default App;
