import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListDaily from './ListDaily';
import Footer from './Footer';
import ListWeekly from './ListWeekly';
 
class AddTodo extends Component {
    // componentDidUpdate() {
    //     //fetches todos after input and updates list
    //     this.props.fetchTodos();
    // }
    
    render() {
        return (
            <div className="card-holder">
                <div className="container card">
                <h2>Todo List - Daily</h2>
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
                <ListDaily />
                </div>
                <div className="container card">
                <h2>Todo List - Weekly</h2>
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
                <ListWeekly />
                </div>
                <Footer />
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return state
}



export default connect(mapStateToProps, actions)(AddTodo);