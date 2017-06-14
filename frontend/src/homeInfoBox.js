import React from 'react'
import Login from './Login'

class HomeInfoBox extends React.Component {

    render() {

        return (
            <div className="col-md-10 noPadding">
                //// Creating home info box to give separate ifo box for all tabs.
                    <div id="Home-Info-Box" className="col-md-5 Info-box" >
                        >>> Please click on login<br /><br /><br />
                        >>> Please click on register if you don't have an account
                    </div>
                    <Login />

                </div>
                <div className="row">
                    <div id="footer" className="noPadding"></div>
                </div>

        );
    }
}

export default Home;
