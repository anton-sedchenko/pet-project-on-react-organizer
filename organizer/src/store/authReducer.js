const defaultState = {
    isAuth: false
}
const SET_AUTH = 'SET_AUTH';

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return { isAuth: action.payload };
        default:
            return state;
    }
}
