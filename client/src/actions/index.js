import axios from 'axios';

// export const addTodo = (text) => ({
//     type: 'ADD_TODO',
//     text,
//     id: Math.random()
// }); 

export const addTodo = (text) => async dispatch=> {
    const newTodo = {
        id: Math.random(),
        text,
        completed: false
    }
    const res = await axios.post('/api/todos', newTodo);

    //history.push('/todos', newTodo);
    dispatch({ type: 'ADD_TODO', payload: res.data});
}



export const deleteTodo = (id) => async dispatch =>{
    const currentId = {
        _id: id
    };
    const res = await axios.put('/api/todos', currentId);

    dispatch({ type: 'DELETE_TODO', payload: res.data })
}

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
     
    dispatch({ type: 'FETCH_USER', payload: res.data });
 };

 export const fetchTodos = () => async dispatch => {
    const res = await axios.get('/api/todos');
 
    dispatch({ type: 'FETCH_TODOS', payload: res.data });
 };

 export const fetchLandingData = () => async dispatch => {
    const res = await axios.get('/api/landingdata');
 
    dispatch({ type: 'FETCH_LANDING_DATA', payload: res.data });
 };