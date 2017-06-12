import React from 'react'

class RegistrationForm extends React.Component {   
   render() {      
      return (
         <div id= "register-body">
                <div id="user-Register-box" className="col-md-5">
                    <div id="login-input-box" >
                        <label id="user-first-name" >First Name:</label>
                        <input id="user-name-input" className="input-box" />
                        <hr className="hr-width hr noPadding"></hr>
                        
                        <label id="user-last-name">Last Name:</label>
                        <input id="user-last-input" className="input-box" />
                        <hr className="hr-width hr noPadding"></hr>
                    
                        <label id="user-mob-num">Mobile number:</label>
                        <input id="user-mob-num-input" className="input-box" />
                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-pan-id">PAN ID:</label>
                        <input id="user-pan-id-input" className="input-box" />
                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-pwd-regd">Enter Password:</label>
                        <input id="user-pwd-regd-input" type="password" className="input-box" />
                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-pwd-conf">Confirm Password:</label>
                        <input id="user-pwd-conf-input" type="password" className="input-box" />
                        <hr className="hr-width hr noPadding"></hr>

                    <button className="Button-style" id="user-regd-button" type="button" >Submit</button>
                    </div>
                </div>
                </div>
      );
   }
}

export default RegistrationForm;