import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Modal from './Modal';

class Header extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    renderContent() {
       
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
   
    render() {
        return (
            <div className="container1">
                <nav className="nav">
                    <div className="nav-wrapper" >
                        <Link 
                        to={this.props.auth ? '/todos' : '/'} 
                        className="link-logo" ><img src={logo} alt="logo"></img></Link>
                        <button className="btn" onClick={this.showModal}>Info</button>
                        <ul id="nav-mobile" className="right">
                            {this.renderContent()}
                            <button className="btn" onClick={this.showModal}>Info</button>
                        </ul>
                    </div>
                </nav>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                        <div className="modal-content">
                            <h3>Welcome to Focus Revival</h3>
                            <p>To begin, sign in with your google account</p>
                            <p>Once signed in, add tasks to your weekly or daily lists</p>
                            <p>Click the Focus Revival logo to refresh lists if needed</p>
                            <p>After you complete the task, click on the check mark to remove the task</p>
                        </div>
                </Modal>
            </div>    
        );
    }
}


function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);