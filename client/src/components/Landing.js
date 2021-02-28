import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    renderButton() {
        switch (this.props.auth) {
            case null:
                return (<Link to="/todos"className="loading"><button className="btn">...Loading</button></Link>);
            case false:
                return (
                    <Link to="/auth/google" className="login"><button className="btn" >Log in to get started</button></Link>
                );
            default:
                return (
                    <Link to="/todos" className="get-started"><button className="btn">Get Started</button></Link>
                );
        }

    }
    render() {
        return (
            <div className="container-landing" >
                <div className="landing-content" >
                    <h2>Focus Revival</h2>
                    <h4>Track tasks.</h4>
                    <h4>Find your focus.</h4>
                    <h4>Get stuff done.</h4>
                    <div className="get-started-btn">{this.renderButton()}</div>
                </div>
                
            </div>
        );
    }
}

export default Landing;
