import { applyMiddleware, createStore, combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";
import { addTaskModalReducer } from "./addTaskModalReducer";
import { authReducer } from "./authReducer";
import thunk from "redux-thunk";
import {composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from "./userReducer";
import { fileReducer } from "./fileReducer";

const rootReducer = combineReducers({
    addTaskModal: addTaskModalReducer,
    tasks: tasksReducer,
    isAuth: authReducer,
    user: userReducer,
    file: fileReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
