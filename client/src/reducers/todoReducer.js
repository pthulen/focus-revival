const initialState = {
    data: [{
        id: 2,
        text: "party",
        completed: false
    },
    {
        id: 3,
        text: "get beers",
        completed: true
    }]
}

// export default (state= initialState, action) => {
//     switch (action.type){
//         case 'ADD_TODO':
//             //returns state with data from new todo
//             return {
//                 ...state,
//                 data: [...state.data, {
//                     id: action.id,
//                     text: action.text,
//                     completed: false
//                 }]
//             }
//         default: 
//         const completedTodo = state.data.find(task => task.id === action.id);
//         if(completedTodo) {completedTodo.completed = true};
//             return {
//                 ...state,
//                 data: [...state.data]
//             }    
//        // filters out the during todo by id then returns the state without that todo (deletes it)
//        // const todos = state.data.filter(todo => todo.id !== action.id)
//         //     return {
//         //         ...state,
//         //         data: todos
//         //     }  
//     }
     
//  };

export const todoReducer = (state= initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            //returns state with data from new todo
            return {
                ...state,
                data: [...state.data, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }]
            }
        default: 
        const completedTodo = state.data.find(task => task.id === action.id);
        if(completedTodo) {completedTodo.completed = true};
            return {
                ...state,
                data: [...state.data]
            }    
       // filters out the during todo by id then returns the state without that todo (deletes it)
       // const todos = state.data.filter(todo => todo.id !== action.id)
        //     return {
        //         ...state,
        //         data: todos
        //     }  
    }
     
 };


