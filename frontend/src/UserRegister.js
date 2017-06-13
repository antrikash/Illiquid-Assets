import React, { Component } from 'react';

import './App.css';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


class UserRegister extends Component {
  constructor(){
    super();
    this.state={
      firstName:'';
      lastName:'';
      mobileNumber:'';
      panID:'';
      password:'';
      confirmPassword:'';
    }
    this.updateState = this.updateStateALL.bind(this);
    this.updateState = this.updateStateLN.bind(this);
    this.updateState = this.updateStateMN.bind(this);
    this.updateState = this.updateStatePI.bind(this);
    this.updateState = this.updateStatePa.bind(this);
    this.updateState = this.updateStateCP.bind(this);
  }

  updateStateFN(e) {
    this.setState({firstName: e.target.value});
  }
  updateStateLN(e) {
    this.setState({lastName: e.target.value});
  }
  updateStateMN(e) {
    this.setState({mobileNumber: e.target.value});
  }
  updateStatePI(e) {
    this.setState({panID: e.target.value});
  }
  updateStatePa(e) {
    this.setState({password: e.target.value});
  }
  updateStateCP(e) {
    this.setState({confirmPassword: e.target.value});
  }

    render() {
        return (

            <div id="user-register-page">
                <div id="user-register-info-box" className="Info-box">
                    Please Register here
                    </div>

                <div id="user-register-input-box" className="Register-box">

                    <label id="user-firstName" value = {this.state.firstName} onChange = {this.updateStateALL}>First Name</label><br />
                    <input id="user-firstName-input">Please enter Firstname</input><br />

                    <label id="user-lastName" value = {this.state.assetName} onChange = {this.updateStateALL}>Last Name</label><br />
                    <input id="user-lastName-input">Please enter Lastname</input><br />

                    <label id="user-mobile" value = {this.state.assetName} onChange = {this.updateStateALL}>Mobile Number</label><br />
                    <input id="user-mobile-input" type="number" minLength='10' >Please enter mobile number</input><br />

                    <label id="user-PanID" value = {this.state.assetName} onChange = {this.updateStateALL}>PAN ID</label><br />
                    <input id="user-PanID-input">Please enter PanID</input><br />

                    <label id="user-password" value = {this.state.assetName} onChange = {this.updateStateALL}>Password</label><br />
                    <input id="user-password-input">Please enter password</input><br />

                    <label id="confirm-password" value = {this.state.assetName} onChange = {this.updateStateALL}>Confirm Password</label><br />
                    <input id="confirm-password-input">Please confirm password</input><br />

                    <button id="login-submit-button" type="button">Submit</button>
                    <button id="login-reset-button" type="button">Reset</button>

                </div>
            </div>
        );
    }

}
