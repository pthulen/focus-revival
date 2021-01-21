export const quoteReducer = (state=null, action) =>{
    switch (action.type) {
        case 'FETCH_QUOTE':
            return action.payload || false;
        default:
            return state;
    }
}