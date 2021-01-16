import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class List extends Component {
    renderContent() {
        if(this.props.todos){
            

        switch (this.props.todos) {
            case null:
                return (<div>Loading Null</div>);  
            case false:
                return (<div>Loading - undefined</div>);    
            default:
                return (
                    <div className="todo-list">
                        {this.props.todos.map((todo) => todo.completed ? (<li key ={todo._id} style={{display: "none"}}></li>) : (
                        <li className="todo-list1" key={todo._id}>
                            <span>{todo.text}</span>
                            <br />
                            <button className="list red btn" onClick={()=> {
                               this.props.deleteTodo(todo._id);
                               this.props.todos.find(todoCurrent => todoCurrent._id === todo._id).completed = true;
                                this.forceUpdate();
                            } }>Completed</button>
                        </li>
                ))}
                    </div>
                );
        }
    } else {
        return (<div className="signed-out-message">Please sign in</div>)
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

