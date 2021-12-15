import React, { useState } from 'react';
import ButtonDefault from '../UI/button/ButtonDefault';
import InputDefault from '../UI/input/Input';
import './AddTaskForm.css';
import { useDispatch } from "react-redux";

const AddTaskForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        taskName: '',
        pointsType: 'Choose points type',
        pointsDone: 0,
        levelUpType: 'Choose level up type',
        levelUpLimit: '',
        currentLevel: 0,
        complete: false
    });
    const onAddTaskBtnClick = (e) => {
        e.preventDefault();
        const newTask = {
            ...task, id: Date.now()
        };

        dispatch({ type: 'ADD_TASK', payload: newTask });
        setTask({
            taskName: '',
            pointsType: 'Choose points type',
            pointsDone: 0,
            levelUpType: 'Choose level up type',
            levelUpLimit: '',
            currentLevel: 0,
            complete: false
        });
        dispatch({ type: 'CLOSE_MODAL', payload: false })
    }
    const levelUpTypeCheck = (levelUpType) => {
        switch (levelUpType) {
            case 'it':
                return ['Trainee', 'Junior', 'Middle', 'Senior'];
            case 'numbersCounter':
                const numbersArr = [];

                for (let i = 0; i <= 100; i++) {
                    numbersArr.push(i);
                }

                return numbersArr;
            case 'singleTask':
                return ['Single task'];
            default:
                return ['empty'];
        }
    }

    return (
        <form className="add-task-form">
            <InputDefault
                onChange={ e => setTask({ ...task, taskName: e.target.value }) }
                value={ task.taskName }
                required
                type="text"
                placeholder="Task name"
            />
            <select
                required
                size="1"
                name="pointsType"
                onChange={ e => setTask({ ...task, pointsType: e.target.value }) }
                value={ task.pointsType }
                className="add-task-form-select"
            >
                <option disabled>Choose points type</option>
                <option value="hours">hours</option>
                <option value="points">points</option>
                <option value="lessons">lessons</option>
                <option value="trainings">trainings</option>
                <option value="counter">counter</option>
                <option value="singleTask">single task</option>
            </select>
            <select
                required
                size="1"
                name="levelUpType"
                onChange={ e => setTask({ ...task, levelUpType: levelUpTypeCheck(e.target.value) }) }
                value={ task.levelUpType }
                className="add-task-form-select"
            >
                <option disabled>Choose level up type</option>
                <option value="it">Trainee, Junior, Middle, Senior</option>
                <option value="numbersCounter">Numbers counter</option>
                <option value="singleTask">Single task</option>
            </select>
            <InputDefault
                onChange={ e => setTask({ ...task, levelUpLimit: Number(e.target.value) }) }
                value={ task.levelUpLimit }
                required
                type="text"
                placeholder="Set up level up limit"
            />
            <ButtonDefault
                onClick={ onAddTaskBtnClick }
                style={{ marginBottom: '20px' }}
            >Add task</ButtonDefault>
        </form>
    );
};

export default AddTaskForm;
