import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions';

const AddTodo = (props) => (
    <div className="container">
        <h2>Todo List</h2>
         <form onSubmit={(event) => {
            event.preventDefault()

            let input = event.target.userInput.value
            props.dispatch(addTodo(input))
            event.target.userInput.value = ''

            console.log(input)
        }}>
            <input type="text" name="userInput" />
            <button className="form waves-effect waves-light btn">Submit</button>
        </form>
    </div>
      
)


export default connect()(AddTodo);