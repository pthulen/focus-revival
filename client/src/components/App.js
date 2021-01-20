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

const backgroundStyle = {
  backgroundImage: "url('https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260')",
  height: "100%", 
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchTodos();
    this.props.fetchLandingData();
}
renderContent() {
  if(this.props.landing){
      

  switch (this.props.landing) {
      case null:
          return (<div>Null</div>);  
      case false:
          return (<div>Loading - undefined</div>);    
      default:
          return (
              <div className="image">
                  {this.props.landing[0]}
              </div>
          );
  }
} else {
  return (<div className="signed-out-message">Please sign in</div>)
}
}
  render() {
    return (
      <BrowserRouter>
        <div className="fill" id="main" style={backgroundStyle} >
            <Header />
          <div className="landing">
          <Route exact path="/" component={Landing} />
          </div>  
          <div className="todos">
            <Route exact path="/todos" component={AddTodo} />
            {this.renderContent()}
          </div>
        </div>
      
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);