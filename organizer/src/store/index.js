import { createStore, combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";
import { addTaskModalReducer } from "./addTaskModalReducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { fileReducer } from "./fileReducer";

const rootReducer = combineReducers({
    addTaskModal: addTaskModalReducer,
    tasks: tasksReducer,
    isAuth: authReducer,
    user: userReducer,
    file: fileReducer
});

export const store = createStore(rootReducer);
