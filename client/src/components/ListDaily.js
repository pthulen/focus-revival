import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';


class ListDaily extends Component {
    renderContent() {
        let dailyTodos = [];
        if(this.props.todos){
            this.props.todos.forEach((todo) => {
                if(todo.type === "daily"){
                    dailyTodos.push(todo);
                }
            });

        switch (this.props.todos) {
            case null:
                return (<div>Loading Null</div>);  
            case false:
                return (<div>Loading - undefined</div>);    
            default:
                return (
                    <div className="todo-list">
                        {dailyTodos.map((todo) => todo.completed ? (<li key ={todo._id} style={{display: "none"}}></li>) : (
                        <li className="todo-list1" key={todo._id}>
                            <span>{todo.text}</span>
                            <br />
                            <CheckCircle className="list btn" onClick={()=> {
                               this.props.deleteTodo(todo._id);
                               this.props.todos.find(todoCurrent => todoCurrent._id === todo._id).completed = true;
                               setTimeout(this.forceUpdate(), 1000);
                            } } />
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
export default connect(mapStateToProps, actions)(ListDaily);

