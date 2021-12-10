import { createStore, combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";
import { addTaskModalReducer } from "./addTaskModalReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
    addTaskModal: addTaskModalReducer,
    tasks: tasksReducer,
    isAuth: authReducer
});

export const store = createStore(rootReducer);
