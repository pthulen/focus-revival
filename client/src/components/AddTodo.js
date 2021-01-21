import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import List from './List';
import Footer from './Footer';
 
class AddTodo extends Component {
    // componentDidUpdate() {
    //     //fetches todos after input and updates list
    //     this.props.fetchTodos();
    // }
    render() {
        return (
            <div className="container card">
                <h2>Todo List</h2>
                <form onSubmit={(event) => {
                    event.preventDefault()

                     let input = event.target.userInput.value
                     this.props.addTodo(input);
                    event.target.userInput.value = ''
                    this.props.fetchTodos();
                    }}>
                <input type="text" name="userInput" />
                <button className="form waves-effect waves-light btn">Add Task</button>
                </form>
                <List />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}



export default connect(mapStateToProps, actions)(AddTodo);