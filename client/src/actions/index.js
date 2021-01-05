import axios from 'axios';

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text,
    id: Math.random()
}); 

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
})

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    console.log(res);
     
    dispatch({ type: 'FETCH_USER', payload: res.data });
 };

 export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
 
    dispatch({ type: 'FETCH_USER', payload: res.data });
 };