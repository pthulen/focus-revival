import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Header from './Header';
import AddTodo from './AddTodo';
//import List from './List';

import '.././Normalize.css';
import '.././App.css';

class App extends Component {
  
  componentDidMount() {
    
    this.props.fetchUser();
    this.props.fetchTodos();
}
  render() {
    return (
      <BrowserRouter>
        <div className="fill" id="main" >
            <Header />
          <div className="center">
            <Route exact path="/" component={Landing} />
            <Route exact path="/todos" component={AddTodo} />
            {/* <List /> */}
          </div>
            
        </div>
      
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);