import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BackSpace from '@material-ui/icons/Backspace'



class ListDaily extends Component {
    constructor(props) {
        super(props);
        this.state ={
            showCompleted: false
        }
    }
    renderContent() {
        let showCompleted = this.state.showCompleted;
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
                        <button
                        onClick={() => this.setState({showCompleted: !this.state.showCompleted})}>{showCompleted ? "Hide Completed" : "Show Completed"}</button>
                        {dailyTodos.map((todo) => !todo.completed ? (<li key ={todo._id} style={{display: "none"}}></li>) : (
                        <li className={showCompleted ? "todo-list1" : "hidden"} key={todo._id}>
                            <span>{todo.text}</span>
                            <br />
                            <BackSpace className="list btn" onClick={()=> {
                               this.props.deleteTodo(todo._id);
                               this.props.todos.find(todoCurrent => todoCurrent._id === todo._id).completed = false;
                               setTimeout(this.forceUpdate(), 500);
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