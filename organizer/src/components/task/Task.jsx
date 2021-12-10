import React from 'react';
import './Task.css';
import { useDispatch } from "react-redux";

function Task({ task, num }) {
    const dispatch = useDispatch();

    function increment() {
        let pointsDone = task.pointsDone;
        let currentLevel = task.currentLevel;

        if (pointsDone === task.levelUpLimit && currentLevel !== task.levelUpType.length - 1) {
            pointsDone = 0;
            currentLevel += 1;
            dispatch({ type: 'UPDATE_TASK', payload: {taskId: task.id, pointsDone, currentLevel} });

            return;
        } else if (pointsDone === task.levelUpLimit && currentLevel === task.levelUpType.length - 1) {

            return;
        }
        pointsDone += 1;
        dispatch({ type: 'UPDATE_TASK', payload: {taskId: task.id, pointsDone, currentLevel} });
    }

    function decrement() {
        let pointsDone = task.pointsDone;
        let currentLevel = task.currentLevel;

        if (pointsDone === 0 && currentLevel !== 0) {
            pointsDone = task.levelUpLimit;
            currentLevel -= 1;
            dispatch({ type: 'UPDATE_TASK', payload: {taskId: task.id, pointsDone, currentLevel} });

            return;
        } else if (pointsDone === 0 && currentLevel === 0) {

            return;
        }

        pointsDone -= 1;
        dispatch({ type: 'UPDATE_TASK', payload: {taskId: task.id, pointsDone, currentLevel} });
    }

    const completeTask = (taskId) => {
        dispatch({ type: 'COMPLETE_TASK', payload: {taskId} });
    }

    const removeTask = (taskId) => {
        dispatch({ type: 'REMOVE_TASK', payload: {taskId} });
    }

    return (
        <tr className={ !task.complete ? 'tasks-table__row' : 'tasks-table__row task-done' }>
            <td className="tasks-table__cell">
                <div className={ !task.complete ? 'tasks-complete-indicator' : 'tasks-complete-indicator task-done'}></div>
                { num }
            </td>
            <td className="tasks-table__cell">{ task.taskName }</td>
            <td className="tasks-table__cell">
                <div className="tasks-table__cell-points-done">
                    <span className="tasks-table__points-value">
                        { task.pointsDone } / { task.levelUpLimit } { task.pointsType }
                    </span>
                    <div>
                        <button
                            onClick={ increment }
                            className="add-task-table__btn"
                        >+</button>
                        <button
                            onClick={ decrement }
                            className="add-task-table__btn"
                        >-</button>
                    </div>
                </div>
            </td>
            <td className="tasks-table__cell">{ task.levelUpType[task.currentLevel] }</td>
            <td className="tasks-table__cell">
                <button
                    onClick={ () => completeTask(task.id) }
                    className="add-task-table__btn"
                >Done</button>
                <button
                    onClick={ () => removeTask(task.id) }
                    className="add-task-table__btn"
                >Delete</button>
            </td>
        </tr>
    );
}

export default Task;
