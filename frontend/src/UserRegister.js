import React from 'react';
import hashFnv32a from './hash';

class RegistrationForm extends React.Component {
  constructor(){
    super();
    this.state={
      firstName:'',
      lastName:'',
      mobileNumber:'',
      panID:'',
      password:'',
      confirmPassword:''
    }
    this.updateStateALL = this.updateStateALL.bind(this);
    this.submitClick = this.submitClick.bind(this);

  }

  updateStateALL(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log("doesitwork",this.state);
  }
  submitClick(e){
  if(this.state.password == this.state.confirmPassword)
  console.log("The form has been submitted!! Thank you!!");
  // else{
  //   this.state.confirmPassword.value.toString = "";
  // }
  }

   render() {
      return (
         <div id= "register-body">
                <div id="user-Register-box" className="col-md-5">
                    <div id="login-input-box" >
                        <label id="user-first-name" >First Name:</label>
                        <input id="user-name-input" className="input-box" onChange={this.updateStateALL} value={this.state.firstName} name="firstName"/>
                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-last-name">Last Name:</label>
                        <input id="user-last-input" className="input-box" onChange={this.updateStateALL} value={this.state.lastName} name="lastName"/>
                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-mob-num">Mobile number:</label>
                        <input id="user-mob-num-input" className="input-box" onChange={this.updateStateALL} value={this.state.mobileNumber} name="mobileNumber"/>
                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-pan-id">PAN ID:</label>
                        <input id="user-pan-id-input" className="input-box" onChange={this.updateStateALL} value={this.state.panID} name="panID"/>
                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-pwd-regd">Enter Password:</label>
                        <input id="user-pwd-regd-input" type="password" className="input-box" onChange={this.updateStateALL} value={this.state.password} name="password"/>
                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-pwd-conf">Confirm Password:</label>
                        <input id="user-pwd-conf-input" type="password" className="input-box" onChange={this.updateStateALL} value={this.state.confirmPassword} name="confirmPassword"/>
                        <hr className="hr-width hr noPadding"></hr>

                    <button className="Button-style" id="user-regd-button" type="button" onClick={this.submitClick}>Submit</button>
                    </div>
                </div>
                </div>
      );
   }
}

export default RegistrationForm;
