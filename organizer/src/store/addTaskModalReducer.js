const defaultState = {
    isVisible: false
};
export const addTaskModalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return { isVisible: action.payload };
        case 'CLOSE_MODAL':
            return { isVisible: action.payload };
        default:
            return state;
    }
};
