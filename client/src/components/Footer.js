import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const quote = {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln"
    }
class Footer extends Component {
    async componentDidMount() {
        const response = await fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=1&tag=motivational`);
        const json = await response.json();
        console.log(json.quotes[0].text);
      }
     renderContent() {
        if(this.props.quote) {
            console.log(this.props.quote);
        //let randomElement = this.props.quote[Math.floor(Math.random() * this.props.quote.length)]
            return (
                <div>
                    <p>{this.props.quote.content}</p> 
                    <p>{this.props.quote.author}</p> 
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