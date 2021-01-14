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
          <div className="landing">
          <Route exact path="/" component={Landing} />
          </div>  
          <div className="todos">
            <Route exact path="/todos" component={AddTodo} />
          </div>
            
        </div>
      
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);