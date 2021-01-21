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
            let randomElement = this.props.quote[Math.floor(Math.random() * this.props.quote.length)]
            return (
                <div>
                    <p>{randomElement.text}</p> 
                    <p>{randomElement.author}</p> 
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

            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, actions)(Footer);