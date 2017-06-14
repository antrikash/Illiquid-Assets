import React, { Component } from 'react'

import './App.css'
import Web3 from 'web3'
import 'bootstrap/dist/css/bootstrap.css'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


var ETHER_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var peoplecontractABI = [{ "constant": true, "inputs": [], "name": "getPeople", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_firstName", "type": "bytes32" }, { "name": "_lastName", "type": "bytes32" }, { "name": "_age", "type": "uint256" }], "name": "addPerson", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "People", "outputs": [{ "name": "firstName", "type": "bytes32" }, { "name": "lastName", "type": "bytes32" }, { "name": "age", "type": "uint256" }], "payable": false, "type": "function" }]

var peoplecontractaddress = '0xfb206b2c68b87e642dfcdb5dca59fb29ec6f934a'

var peoplecontract = ETHER_CLIENT.eth.contract(peoplecontractABI).at(peoplecontractaddress)


class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     firstName: [],
  //     lastName: [],
  //     ages: []
  //   }
  // }
  // ComponentWillMount() {
  //   var data = peoplecontract.getPeople()
  //   this.setState({
  //     firstNames: String(data[0]).split(','),
  //     lastNames: String(data[1]).split(','),
  //     // ages: web3.eth.uint(data[2]).split(',')
  //   })
  // }

  render() {
    return (

      <div id="whole-page" className="h100 container-fluid">


        <div className=" menuContainer h100">

          <div className="row h100" >

            <div className="col-md-2 h100 noPadding">
              <div className="Heading-corner-box noPadding">
                <div className="Heading-corner-Names">

                  <span id="Co-Innovation-Lab-Name">Co-Innovation Lab</span><br />
                  <span id="Illiquid-Assets-Name">Illiquid Assets</span>

                </div>

              </div>
              <hr className="hr noPadding"></hr>
              <div id="Button-list-box">
                <Link to="home"><button className="Button-style-menu" id="Home-button" >Home</button></Link><br />
                <Link to="marketPLace" ><button className="Button-style-menu" id="Marketplace-button" >Marketplace</button></Link><br />
                <Link to="About"><button className="Button-style-menu" id="About-button" >About</button></Link><br />
                <Link to="AssetRegister"><button className="Button-style-menu" id="Default-1-button" >Asset Registeration</button></Link><br />
                <button className="Button-style-menu" id="Default-2-button" >Default-2</button><br />

              </div>
            </div>

            {this.props.children}

          </div>


        </div>


      </div>

    );
  }

}

export default App;
