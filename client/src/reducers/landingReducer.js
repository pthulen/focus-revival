export const landingReducer = (state=null, action) =>{
    switch (action.type) {
        case 'FETCH_LANDING_DATA':
            return action.payload || false;
        default:
            return state;
    }
}