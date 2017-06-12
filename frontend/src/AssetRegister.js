import React, { Component } from 'react';

import './App.css';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


 
 
import React, { Component } from 'react';
 
 
 
class AssetRegistration extends Component {
constructor(){
    super();
    this.state ={
        newProject: {},
        formSub : false,
        assetName: '',
        assetQuantity:'',
        pricePerAsset:'',
        totalPrice:''
    }
    this.updateState = this.updateState.bind(this);
    this.updateState1 = this.updateState1.bind(this);
    this.updateState2 = this.updateState2.bind(this);
    this.renderSubmit = this.renderSubmit.bind(this);
    this.renderTotal = this.renderTotal.bind(this);
 
    }
 
 
 
    static defaultProps ={
        categories: ['Bonds','Nano Stocks','Penny Stocks']
    }
    handleSubmit(e){
    //   if(this.refs.title.value === ''){
    //       alert('Amount is required');
    //   }else{
    //       this.setState({newProject:{
    //           title: this.refs.title.value,
    //           category: this.refs.category.value
    //       }, formSub : "true"},function(){
    //           console.log("hi",this.state);
    //           let x = this.state.data;
    //            alert('You have assigned ' + x + ' CT Tokens');
    //       });
    //   }
       
    //     e.preventDefault();
       
    }
  
    updateState(e) {
      this.setState({assetName: e.target.value});
    }
 
    updateState2(e){                   
        this.setState({pricePerAsset: e.target.value});
}
   updateState1(e) {
      this.setState({assetQuantity: e.target.value});
      /*let c = (this.state.assetQuantity * this.state.pricePerAsset);
      console.log(c)
      this.setState({totalPrice: c});*/
      this.renderTotal(this.state.assetQuantity, this.state.pricePerAsset);
     
   }
 
   renderSubmit() {
      console.log()
      if(this.state.formSub)
      {return (<div >You have assigned with {this.state.data} CT Tokens</div>);}
      else return false;
   }
   renderTotal () {
       let c = (this.state.assetQuantity * this.state.pricePerAsset);
       //console.log("here", assetQuantity, pricePerAsset);
      console.log("total", c)
      this.setState({totalPrice: c});
      return (<div>{this.state.totalPrice}</div>)
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
        <label>Enter Price per Asset :</label>
        <input type="text" id="input3" ref="title3" value = {this.state.pricePerAsset} onChange = {this.updateState2}/><br />
        <label>Enter Quantity of Asset :</label>\
        <input type="text" id="input2" ref="title2" value = {this.state.assetQuantity} onChange = {this.updateState1} onKeyUp={this.renderTotal} /><br />
        {this.renderTotal}
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
        {this.renderSubmit}
 
         </div>
    );
  }
}
 
export default AssetRegistration;