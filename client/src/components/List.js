import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

class List extends Component {
    renderContent() {
        if(this.props.todos){
           // console.log(this.props.todos.data[0]);
            console.log(this.props.todos);

        switch (this.props.todos) {
            case null:
                return (<div>Loading Null</div>);  
            case false:
                return (<div>Loading - undefined</div>);    
            default:
                return (
                    <div>
                        {this.props.todos.map((todo, _id) => todo.completed ? (<li key ={_id} style={{display: "none"}}></li>) : (
                        <li className="section" key={_id}>
                            <span>{todo.text}</span>
                            <br />
                            <button className="list red btn" onClick={()=> this.props.dispatch(deleteTodo(todo.id))}>Completed</button>
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
export default connect(mapStateToProps)(List);

