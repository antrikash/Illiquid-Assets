import React from 'react'

class LoginForm extends React.Component {   
   render() {      
      return (
         <div id= "login-body">
                {/*<div id="header">
                    <span id="Heading-name">Login ></span>
                </div>
                <hr className="hr noPadding"></hr>
                <div id="Info-box" className="col-md-5">
                    >>> Please Enter User ID and Password<br />
                    </div>*/}
                <div id="Register-box" className="col-md-5">
                    <div id="login-input-box" >
                        <label id="user-id">User ID:</label>
                        <input id="user-id-input" className="input-box" />

                        <hr className="hr-width hr noPadding"></hr>

                        <label id="user-password">Password:</label>
                        <input id="user-password-input" type="password" className="input-box" />

                        <hr className="hr-width hr noPadding"></hr>

                    <button className="Button-style" id="user-login-button" type="button" >login</button><br />
                    </div>
                </div>
                </div>
      );
   }
}

export default LoginForm;