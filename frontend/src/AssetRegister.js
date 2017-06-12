import React, { Component } from 'react';

import './App.css';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


class AssetRegister extends Component {

    render() {
        return (

            <div id="asset-register-page">
                <div id="asset-register-Info-box" className="Info-box">
                    Please Register here
                    </div>

                <div id="asset-register-input-box" className="Register-box">

                    <label id="asset-name">Asset Name</label><br />
                    <input id="asset-name-input">Please enter Asset name</input><br />
                    
                    <label id="asset-quantity">Quantity</label><br />
                    <input id="asset-quantity-input" type="number" >Please enter Quantity</input><br />
                    
                    <label id="asset-price">Price of each asset</label><br />
                    <input id="asset-price-input" type="number" >Please enter price</input><br />
                    
                    <label id="asset-type">Asset type</label><br />
                    <input id="asset-type-input">Please enter Asset type</input><br />
                    
                    <button id="asset-submit-button" type="button">Submit</button>
                    <button id="asset-reset-button" type="button">Reset</button>
                
                </div>

            </div>
        );
    }

}