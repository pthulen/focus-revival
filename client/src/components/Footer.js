import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const quote = {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln"
    }
class Footer extends Component {
     renderContent() {
        if(this.props.quote) {
            return (
                <div>
                    <p>{this.props.quote[0].q}</p> 
                    <p>{this.props.quote[0].a}</p> 
                    <p>Quotes By <a className="zenquotes" href="https://zenquotes.io/" target="_blank" rel="noreferrer">ZenQuotes API</a></p>
                </div>   
                )
        } else {
            (<p>{quote.text}</p>)
        }
    }
    render() {
        
        return (
            <div className="footer">
                {this.renderContent()}
                <p>Photos by <a className="pexels" href="https://www.pexels.com"><img alt="pexels logo" src="https://theme.zdassets.com/theme_assets/9028340/1e73e5cb95b89f1dce8b59c5236ca1fc28c7113b.png" /></a></p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, actions)(Footer);