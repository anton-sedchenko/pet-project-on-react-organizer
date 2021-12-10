const tasksAtLocalStorage = () => {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}
const defaultState = {
    tasks: tasksAtLocalStorage()
};
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

export const tasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            localStorage.setItem('tasks', JSON.stringify([...state.tasks, action.payload]));

            return { ...state, tasks: [...state.tasks, action.payload] };
        case REMOVE_TASK:
            const newTasksArr = [...state.tasks].filter(task => task.id !== action.payload.taskId);
            localStorage.setItem('tasks', JSON.stringify(newTasksArr));

            return { ...state, tasks: newTasksArr };
        case UPDATE_TASK:
            const updatedTasksArr = [...state.tasks].map(task => {
                if (task.id === action.payload.taskId) {
                    return { ...task, pointsDone: action.payload.pointsDone, currentLevel: action.payload.currentLevel };
                }

                return task;
            });
            localStorage.setItem('tasks', JSON.stringify(updatedTasksArr));

            return { ...state, tasks: updatedTasksArr };
        case COMPLETE_TASK:
            const tasksListAfterCompleteOne = [...state.tasks].map(task => {
                if (task.id === action.payload.taskId) {
                    return { ...task, complete: true };
                }

                return task;
            });
            localStorage.setItem('tasks', JSON.stringify(tasksListAfterCompleteOne));

            return { ...state, tasks: tasksListAfterCompleteOne };
        default:
            return state;
    }
};
