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

  updateStateALL(e) {
    this.setState([e.target.name]: e.target.value});
  }
  // updateStateALL(e) {
  //   this.setState({lastName: e.target.value});
  // }
  // updateStateALL(e) {
  //   this.setState({mobileNumber: e.target.value});
  // }
  // updateStateALL(e) {
  //   this.setState({panID: e.target.value});
  // }
  // updateStateALL(e) {
  //   this.setState({password: e.target.value});
  // }
  // updateStateALL(e) {
  //   this.setState({confirmPassword: e.target.value});
  // }


    render() {
        return (

            <div id="user-register-page">
                <div id="user-register-info-box" className="Info-box">
                    Please Register here
                    </div>

                <div id="user-register-input-box" className="Register-box">

                    <label id="user-firstName" >First Name</label><br />
                    <input id="user-firstName-input" onChange = {this.updateStateALL} value = {this.state.firstName} name="firstName">Please enter Firstname</input><br />

                    <label id="user-lastName">Last Name</label><br />
                    <input id="user-lastName-input" value = {this.state.lastName} onChange = {this.updateStateALL}>Please enter Lastname</input><br />

                    <label id="user-mobile">Mobile Number</label><br />
                    <input id="user-mobile-input" type="number" minLength='10' value = {this.state.mobileNumber} onChange = {this.updateStateALL}>Please enter mobile number</input><br />

                    <label id="user-PanID" >PAN ID</label><br />
                    <input id="user-PanID-input" value = {this.state.panID} onChange = {this.updateStateALL}>Please enter PanID</input><br />

                    <label id="user-password">Password</label><br />
                    <input id="user-password-input" value = {this.state.password} onChange = {this.updateStateALL}>Please enter password</input><br />

                    <label id="confirm-password">Confirm Password</label><br />
                    <input id="confirm-password-input" value = {this.state.confirmPassword} onChange = {this.updateStateALL}>Please confirm password</input><br />
                    <button id="login-submit-button" type="button">Submit</button>
                    <button id="login-reset-button" type="button">Reset</button>

                </div>
            </div>
        );
    }

}
