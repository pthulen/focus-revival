import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import { deleteTodo } from '../actions';


class List extends Component {
    updateTodosList(){
        this.props.fetchTodos();
    }
    renderContent() {
        if(this.props.todos){

        switch (this.props.todos) {
            case null:
                return (<div>Loading Null</div>);  
            case false:
                return (<div>Loading - undefined</div>);    
            default:
                return (
                    <div>
                        {this.props.todos.map((todo) => todo.completed ? (<li key ={todo._id} style={{display: "none"}}></li>) : (
                        <li className="section" key={todo._id}>
                            <span>{todo.text}</span>
                            <br />
                            <button className="list red btn" onClick={()=> {
                               this.props.deleteTodo(todo._id);
                                this.updateTodosList();
                               
                            } }>Completed</button>
                        </li>
                ))}
                    </div>
                );
        }
    } else {
        return (<div>Sign in please</div>)
    }
    }

    render() {
        return (
            <div className='container'>
                {this.renderContent()}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
      auth: state.auth,
      todos: state.todos
})
export default connect(mapStateToProps, actions)(List);

