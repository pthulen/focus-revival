import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const List = (props) => (
        <div className='container'>
            {props.todos.map((todo, index) => todo.completed ? (<li key ={index} style={{display: "none"}}></li>) : (
                <li className="section" key={index}>
                    <span>{todo.text}</span>
                    <br />
                    <button className="list red btn" onClick={()=> props.dispatch(deleteTodo(todo.id))}>Completed</button>
                </li>
            ))}
        </div>
)
const mapStateToProps = (state) => ({
    todos: state.todos.data
})
export default connect(mapStateToProps)(List);