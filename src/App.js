import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from 'material-ui/RaisedButton';
import { users } from './store';
import I18n, { lang } from './locales/i18n';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlang: 'hi',
      name: null,
      email: null,
      address: null,
      password: null,
      register: {
        //hi.json
        name: "नाम",
        nameHint: "अपना पूरा नाम लिखे",
        email: "ईमेल आईडी",
        emailHint: "अपनी ईमेल आईडी दर्ज करें",
        password: "पासवर्ड",
        passwrodHint: "अपनी पासवर्ड दर्ज करें",
        confirmPassword: "आप पासवर्ड फिर से दर्ज करें",
        registerHeading: "खुद को रजिस्टर करें",
        wrongEmail: "कृपया एक मान्य ईमेल दर्ज करें:: िजेता@इंटरनेट.भारत",
        saveButton: "जमा करें"
      }

    }
  };
  



  changeLanguage = (lang) => {
    if (lang === 'hi') {
      this.setState({
        currentLang: 'hi',
        register: {
          //hi.json
          name: "नाम",
          nameHint: "अपना पूरा नाम लिखे",
  email: "ईमेल आईडी",
  emailHint: "अपनी ईमेल आईडी दर्ज करें",
          password: "पासवर्ड",
          passwrodHint: "अपनी पासवर्ड दर्ज करें",
          confirmPassword: "आप पासवर्ड फिर से दर्ज करें",
          registerHeading: "खुद को रजिस्टर करें",
          wrongEmail: "कृपया एक मान्य ईमेल दर्ज करें:: िजेता@इंटरनेट.भारत",
      saveButton: "जमा करें"
    }
      });
    } else if (lang === 'en') {
      this.setState({
        currentLang: 'en',
        register: {
          name: "Name",
          nameHint: "Enter your Full Name",
          email: "EmailID",
          emailHint: "Enter your email id",
          password: "Password",
          passwrodHint: "Enter your password",
          confirmPassword: "Re enter you password",
          registerHeading: "Register Yourself",
          wrongEmail: "Please enter a valid email eg: winners@ua.com",
          saveButton: "Save"
        }
      });
    } else if (lang === 'bn') {
      this.setState({
        currentLang: 'bn',
        register: {
          //bn.json
          name: "নাম",
          nameHint: "আপনার পুরো নাম লিখুন",
          email: "ইমেইল আইডি",
          emailHint: "আপনার ইমেইল আইডি লিখুন",
          password: "পাসওয়ার্ড",
          passwrodHint: "আপনার পাসওয়ার্ড লিখুন",
          confirmPassword: "আবার পাসওয়ার্ড প্রবেশ করান",
          registerHeading: "নিজেকে নিবন্ধন করুন",
    wrongEmail: "একটি বৈধ ইমেইল যেমন লিখুন দয়া করে:বিজয়ীদের@ইন্টারনেট.ভারত",
      saveButton: "রক্ষা"
    }
      });
    } else if (lang === 'ml') {
      this.setState({
        currentLang: 'ml',
        register: {
          //ml.json
          name: "പേര്",
          nameHint: "നിങ്ങളുടെ പൂർണ നാമം എഴുതുക",
  email: "ഇ - മെയിൽ ഐഡി",
          emailHint: "ങ്ങളുടെ ഇമെയിൽ ഐഡി നൽകുക",
          password: "പാസ്വേഡ്",
          passwrodHint: "നിങ്ങളുടെ പാസ്‌വേഡ് നൽകുക",
          confirmPassword: "നിങ്ങളുടെ പാസ്‌വേഡ് വീണ്ടും നൽകുക",
          registerHeading: "സ്വയം രജിസ്റ്റർ ചെയ്യുക",
          wrongEmail: "സാധുവായ ഒരു ഇമെയിൽ നൽകുക ഉദാ:വിജയികൾ@ഇന്റർനെറ്റ്.ഭാരത്",
          saveButton: "Save"
        }
      });
    }
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
            {this.state.register.registerHeading}
          </div>
          <TextField
          name="name"
          onChange={this.handleTextChange}
            hintText={this.state.register.nameHint}
            floatingLabelText={this.state.register.name}
            floatingLabelFixed={true}
          /><br />

          <TextField
          name="email"
          onChange={this.handleTextChange}
            hintText={this.state.register.email}
            floatingLabelText={this.state.register.emailHint}
            floatingLabelFixed={true}
          /><br />
          <TextField
          name="password"
          onChange={this.handleTextChange}
            hintText={this.state.register.password}
            type='password'
            floatingLabelText={this.state.register.passwrodHint}
            floatingLabelFixed={true}
          /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
          <RaisedButton
              label="हिंदी"
            onClick={() => { this.changeLanguage('hi') }}
          />
          <br />
          <RaisedButton
              label="বাঙালি"
            primary={this.state.currentlang === 'bn'}
            onClick={() => { this.changeLanguage('bn') }}
          />
            <br />
          <RaisedButton
              label="മലയാളി"
            primary={this.state.currentlang === 'ml'}
            onClick={() => { this.changeLanguage('ml') }}
          />
            <br />
          <RaisedButton
            label="English"
            
            primary={this.state.currentlang === 'en'}
            onClick={() => { this.changeLanguage('en') }}
          />
          </div>
      </div>
        </MuiThemeProvider>
    );
  }
}
export default App;
