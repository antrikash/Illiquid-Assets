import React from 'react'
import Login from './Login'

class Home extends React.Component {

    render() {

        return (
            <div className="col-md-10 noPadding">
                <div className="row">
                    <div id="header">
                        <span id="Heading-name">Home ></span>
                    </div>
                    <hr className="hr noPadding"></hr>
                    <div id="Info-box" className="col-md-5">
                        >>> Please click on login<br /><br /><br />
                        >>> Please click on register if you don't have an account
                    </div>
                    <Login />
                </div>
                <div className="row">
                    <div id="footer" className="noPadding"></div>
                </div>
            </div>
        );
    }
}

export default Home;