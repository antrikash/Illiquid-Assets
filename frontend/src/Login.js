import React, { Component } from 'react';

import './App.css';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import LoginForm from './loginForm'
import RegistrationForm from './registrationForm'


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openLogin: false,
            openRegister: false
        }
        this.openLoginWindow = this.openLoginWindow.bind(this);
        this.openRegisterWindow = this.openRegisterWindow.bind(this);
    }
    openLoginWindow() {
        this.setState({ openLogin: true })
    }
    openRegisterWindow() {
        this.setState({ openRegister: true})
    }

    render() {
        if (this.state.openLogin) {
            return (
                <LoginForm />
            )
        }
        else if (this.state.openRegister) {
            return (
                <RegistrationForm />
            )
        }
        return (
            <div id="Register-box" className="col-md-5">
                <button className="Button-style" id="login-button" type="button" onClick={this.openLoginWindow}>login</button><br />
                <button className="Button-style" id="Register-button" type="button" onClick={this.openRegisterWindow}>Register</button><br />
            </div>



        );
    }

}