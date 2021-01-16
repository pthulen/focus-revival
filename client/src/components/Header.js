import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import M from "materialize-css/dist/js/materialize.min.js";
import logo from '../logo.png';

class Header extends Component {
    renderContent() {
        // if(this.props.auth){
        //  //   console.log(this.props.auth._id);
        //   }
        switch (this.props.auth) {
            case null:
                return <li className="logout" ><a href="/todos">Error</a></li>;
            case false:
                return (
                    <li className="login" ><a href="/auth/google" >Log In With Google</a></li>
                );
            default:
                return (
                    <li key="2" className="logout"><a href="/api/logout">Logout</a></li>
                );
        }
    }
    // componentDidMount() {
    //     var elem = document.querySelector(".sidenav");
    //     var instance = M.Sidenav.init(elem, {
    //         edge: "left",
    //         inDuration: 250
    //     });
    // }
    render() {
        return (
            <div className="container1">
                <nav className="nav">
                    <div className="nav-wrapper" >
                        <Link 
                        to={this.props.auth ? '/todos' : '/'} 
                        className="link-logo" ><img src={logo} alt="logo"></img></Link>
                        <ul id="nav-mobile" className="right">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
                {/* <ul className="sidenav right" id="test">
                    {this.renderContent()}
                </ul> */}
            </div>    
        );
    }
}


function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);