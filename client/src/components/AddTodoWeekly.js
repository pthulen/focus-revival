import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListWeekly from './ListWeekly';
 
class AddTodoWeekly extends Component {
    // componentDidUpdate() {
    //     //fetches todos after input and updates list
    //     this.props.fetchTodos();
    // }
    
    render() {
        const taskType = "weekly";
        return (
            
                
            <div className="container card">
                <h2>Weekly Tasks</h2>
                    <form onSubmit={(event) => {
                        event.preventDefault()

                        let input = event.target.userInput.value
                        this.props.addTodo(input, taskType);
                        event.target.userInput.value = ''
                        this.props.fetchTodos();
                        }}>
                    <input type="text" name="userInput" />
                    <button className="form btn">Add Task</button>
                    </form>
                    <ListWeekly />
            </div>
            
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})



export default connect(mapStateToProps, actions)(AddTodoWeekly);