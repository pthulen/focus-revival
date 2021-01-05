import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {
    renderContent() {
        console.log(this.props)
        switch (this.props.auth) {
            case null:
                return ;
            case false:
                return (
                    <li><a href="/auth/google" >Log In With Google</a></li>
                );
            default:
                return (
                    <li key="2"><a href="/api/logout">Logout</a></li>
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
            <div>
                <nav className="light-green darken-2">
                    <div className="nav-wrapper" >
                    <Link 
                    to={this.props.auth ? '/todos' : '/'} 
                    className=" left brand-logo" style={{ marginLeft: 10 }}>Todo App - Header</Link>
                    <ul id="nav-mobile" className="hide-on-med-and-down right">
                        {this.renderContent()}
                    </ul>
                    </div>
                </nav>
                <ul className="sidenav right" id="mobile-demo">
                    {this.renderContent()}
                </ul>
            </div>    
        );
    }
}


function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);