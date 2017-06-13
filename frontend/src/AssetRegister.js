import React, { Component } from 'react';

import hashFnv32a from './hash';

var aName;
 var assetUid;

class AssetRegistration extends Component {
    
constructor(){
    super();
    this.state ={
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
    generateUID(e){
        assetUid = hashFnv32a(aName,Date.now(),true);
        alert("UID: ",assetUid.toString());
        console.log(assetUid);
         e.preventDefault();

    }
   
    updateState(e) {
      this.setState({assetName: e.target.value});
      aName = this.state.assetName;
    }

    updateState2(e){                    
        this.setState({pricePerAsset: e.target.value});
}
   updateState1(e) {
      this.setState({assetQuantity: e.target.value});
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
      console.log("total", c)
      this.setState({totalPrice: c});
      return (<div>{this.state.totalPrice}</div>)
   }
   
  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key ={category} value={category}>{category}</option>
      });
     return(
      <div id="asset_regd">
       <div id="Asset-Register-box" className="cls-asset-regd col-md-5">   
      <h3><strong> Register your assets </strong> </h3>
      <form onSubmit={this.generateUID.bind(this)}>    
        <div>
        <label className="asset-label">Asset name :</label>
        <input className="input-box" type="text" id="input1" ref="title1" value = {this.state.assetName} onChange = {this.updateState}/><br />    
        <hr className="hr noPadding"></hr>
        <label className="asset-label">Price per Asset :</label>
        <input className="input-box" type="text" id="input3" ref="title3" value = {this.state.pricePerAsset} onChange = {this.updateState2}/><br />
        <hr className="hr noPadding"></hr>
        <label className="asset-label">Quantity of Asset :</label>
        <input className="input-box" type="text" id="input2" ref="title2" value = {this.state.assetQuantity} onChange = {this.updateState1} onKeyUp={this.renderTotal} /><br />
        {this.renderTotal}
        <hr className="hr noPadding"></hr>
        </div>
        <div>
        <label className="asset-label">Asset Type :</label>
        <select id="asset-type-btn" ref="category" >
        {categoryOptions}
        </select><hr className="hr noPadding"></hr>
        </div>
        <div>
        <label className="asset-label"> Total Market value of Assets :</label>
        <input className="input-box" type="text" id="input4" ref="title4" value = {this.state.totalPrice} /><br />
        <hr className="hr noPadding"></hr>
        </div>
        <button id ="asset-submit-btn" className="Button-style" type="button" onClick = {this.generateUID}>Submit</button>
         
      </form>
        {this.renderSubmit}
        </div>
         </div>
    );
  }
} 

export default AssetRegistration;
