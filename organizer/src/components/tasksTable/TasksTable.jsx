import React from 'react';
import './TasksTable.css';
import Task from '../task/Task.jsx';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import { useSelector } from "react-redux";

function TasksTable() {
    const tasksAtStore = useSelector(state => state.tasks.tasks || []);

    return (
        <div className="tasks-table-container">
            <table className="tasks-table">
                <thead>
                    <tr>
                        <th className="tasks-table__cell">#</th>
                        <th className="tasks-table__cell">Task</th>
                        <th className="tasks-table__cell">Points done</th>
                        <th className="tasks-table__cell">Level</th>
                        <th className="tasks-table__cell">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <TransitionGroup component={ null }>
                        { tasksAtStore.map((task, index) => {
                            return (
                                <CSSTransition
                                    key={ task.id }
                                    timeout={ 500 }
                                    classNames="task-item"
                                >
                                    <Task
                                        num={ index + 1 }
                                        task={ task }
                                    />
                                </CSSTransition>)
                        }) }
                    </TransitionGroup>
                </tbody>
            </table>
            { !tasksAtStore.length && <p className="no-tasks-msg">No tasks found</p> }
        </div>
    );
}

export default TasksTable;
