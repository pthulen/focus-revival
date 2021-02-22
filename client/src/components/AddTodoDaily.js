import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListDaily from './ListDaily';
 
class AddTodoDaily extends Component {
    // componentDidUpdate() {
    //     //fetches todos after input and updates list
    //     this.props.fetchTodos();
    // }
    
    render() {
        const taskType = "daily";
        return (
            
                <div className="container card">
                    <h2>Daily Tasks</h2>
                    <form onSubmit={(event) => {
                        event.preventDefault()

                        let input = event.target.userInput.value
                        this.props.addTodo(input,taskType);
                        event.target.userInput.value = ''
                        this.props.fetchTodos();
                        }}>
                    <input type="text" name="userInput" />
                    <button className="form btn">Add Task</button>
                    </form>
                    <ListDaily />
                </div>
           
            
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})



export default connect(mapStateToProps, actions)(AddTodoDaily);