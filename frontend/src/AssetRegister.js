import React, { Component } from 'react';

import hashFnv32a from './hash';
// function hashFnv32a(str, asString, seed) {
//     /*jshint bitwise:false */
//     var i, l,
//         hval = (seed === undefined) ? 0x811c9dc5 : seed;

//     for (i = 0, l = str.length; i < l; i++) {
//         hval ^= str.charCodeAt(i);
//         hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
//     }
//     if( asString ){
//         // Convert to 8 digit hex string
//         return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
//     }
//     return hval >>> 0;
// }


var aName;
 var assetUid;

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
    //this.generateUID = this.generateUID.bind(this);

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
      <div>
      <h3><strong> Register yous assets </strong> </h3>
      <form onSubmit={this.generateUID.bind(this)}>    
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
        <input type="submit" value="Submit" onClick = {this.generateUID}/>
         
      </form>
        {this.renderSubmit}

         </div>
    );
  }
} 

export default AssetRegistration;
