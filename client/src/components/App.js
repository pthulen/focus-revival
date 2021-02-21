import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Header from './Header';
import AddTodoDaily from './AddTodoDaily';
import AddTodoWeekly from './AddTodoWeekly';
import Footer from './Footer';

import '.././Normalize.css';
import '.././App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchTodos();
    this.props.fetchLandingData();
    this.props.fetchQuote();
}
  updateStyle() {
    if(this.props.landing) {
      let randomElement = this.props.landing[Math.floor(Math.random() * this.props.landing.length)]
      return {
        backgroundImage: `url(${randomElement})`}
    } else {
      return { backgroundImage: "url('https://images.pexels.com/photos/3889990/pexels-photo-3889990.jpeg')"
    }
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="fill" id="main" style={this.props.landing ? this.updateStyle() : { backgroundImage: "url('https://images.pexels.com/photos/3889990/pexels-photo-3889990.jpeg')" } }>
            <Header />
          <div className="landing">
          <Route exact path="/" component={Landing} />
          </div>  
          <div className="todos">
            <div className="card-holder">
            <Route exact path="/todos" component={AddTodoDaily} />
            <Route exact path="/todos" component={AddTodoWeekly} />
            </div>  
            <Route exact path="/todos" component={Footer} />
          </div>
        </div>
      
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  landing: state.landing,
  quote: state.quote
})
export default connect(mapStateToProps, actions)(App);
