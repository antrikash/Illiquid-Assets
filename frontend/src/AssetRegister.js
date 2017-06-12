import React, { Component } from 'react';

import './App.css';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


 
 
class AssetRegister extends Component {
constructor(){
    super();
    this.state ={
        newAsset: {},
        formSub : false,
        assetName: '',
        assetQuantity:'',
        pricePerAsset:'',
        totalPrice:''
    }
    this.updateState = this.updateState.bind(this);
    this.renderSubmit = this.renderSubmit.bind(this);
 
    }
 
 
 
    static defaultProps ={
        categories: ['Bonds','Nano Stocks','Penny Stocks']
    }
    handleSubmit(e){
    //   if(this.refs.assetName.value === ''){
    //       alert('input is required');
    //   }else{
    //       this.setState({newAsset:{
    //           assetName: this.refs.assetName.value,
    //           category: this.refs.category.value
    //       }, formSub : "true"},function(){
    //           console.log("hi",this.state);
    //           let x = this.state.data;
    //            alert('You have assigned ' + x + ' CT Tokens');
    //       });
    //   }
       
    //     e.preventDefault();
       
    }
    updateTotal(e){
        this.setState({totalPrice: e.target.assetQuantity * e.target.pricePerAsset});
    }
    updateState(e) {
      this.setState({assetName: e.target.value,
                   
                    pricePerAsset: e.target.value});
   }
   updateState1(e) {
      this.setState({
                    assetQuantity: e.target.value});
   }
   renderSubmit() {
      console.log()
      if(this.state.formSub)
      {return (<div >You have assigned with {this.state.data} CT Tokens</div>);}
      else return false;
   }
  
  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key ={category} value={category}>{category}</option>
      });
     return(
      <div>
      <h3><strong> Register yous assets </strong> </h3>
      <form onSubmit={this.handleSubmit.bind(this)}>   
        <div>
        <label>Enter Asset name :</label>
        <input type="text" id="input1" ref="title1" value = {this.state.assetName} onChange = {this.updateState}/><br />
        <label>Enter Quantity of Asset :</label>
        <input type="text" id="input2" ref="title2" value = {this.state.assetQuantity} onChange = {this.updateState1}/><br />
        <label>Enter Price per Asset :</label>
        <input type="text" id="input3" ref="title3" value = {this.state.pricePerAsset} onChange = {this.updateState}/><br />
        </div>
        <div>
        <label>Asset Type :</label>
        <select ref="category" >
        {categoryOptions}
        </select><br /><br />
        </div>
        <div>
        <label> Total Market value of Assets :</label>
        <input type="text" id="input4" ref="title4" value = {this.state.totalPrice} /><br />
        </div>
        <input type="submit" value="Submit"/>
        
      </form>
        {this.renderSubmit()}
 
         </div>
    );
  }
}
 
export default AssetRegister;