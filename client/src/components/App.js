import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Header from './Header';
import AddTodo from './AddTodo';
import List from './List';

import '.././App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser();
}
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/todos" component={AddTodo} />
          <List />
            
        </div>
      
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);