const initialState = null


export const todoReducer = (state= initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            //returns state with data from new todo
            return state;
            //         {
            //     ...state,
            //     data: [...state.data, {
            //         id: action.id,
            //         text: action.text,
            //         completed: false
            //     }]
            // }
        case 'FETCH_TODOS':
            return action.payload;
            
        case 'DELETE_TODO':
            return action.paylod;
        default: 
        return state;
       // filters out the during todo by id then returns the state without that todo (deletes it)
       // const todos = state.data.filter(todo => todo.id !== action.id)
        //     return {
        //         ...state,
        //         data: todos
        //     }  
    }
     
 };



 // old way of updating task completion 
//  const completedTodo = state.data.find(task => task.id === action.id);
//         if(completedTodo) {completedTodo.completed = true};
//             return {
//                 ...state,
//                 data: [...state.data]
//             } 


