import React, { Component } from 'react';

import './App.css';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


class UserRegister extends Component {

    render() {
        return (

            <div id="user-register-page">
                <div id="user-register-info-box" className="Info-box">
                    Please Register here
                    </div>

                <div id="user-register-input-box" className="Register-box">

                    <label id="user-firstName">First Name</label><br />
                    <input id="user-firstName-input">Please enter Firstname</input><br />
                    
                    <label id="user-lastName">Last Name</label><br />
                    <input id="user-lastName-input">Please enter Lastname</input><br />
                    
                    <label id="user-mobile">Mobile Number</label><br />
                    <input id="user-mobile-input" type="number" minLength='10' >Please enter mobile number</input><br />
                    
                    <label id="user-PanID">PAN ID</label><br />
                    <input id="user-PanID-input">Please enter PanID</input><br />
                    
                    <label id="user-password">Password</label><br />
                    <input id="user-password-input">Please enter password</input><br />
                    
                    <label id="confirm-password">Confirm Password</label><br />
                    <input id="confirm-password-input">Please confirm password</input><br />
                    
                    <button id="login-submit-button" type="button">Submit</button>
                    <button id="login-reset-button" type="button">Reset</button>
                
                </div>
            </div>
        );
    }

}