import React from 'react';
import './Tasks.css';
import TasksTable from '../components/tasksTable/TasksTable.jsx';
import AddTaskForm from '../components/addTaskForm/AddTaskForm';
import ButtonDefault from '../components/UI/button/ButtonDefault';
import Modal from '../components/modal/Modal';
import { useDispatch, useSelector } from "react-redux";

function Tasks() {
    const dispatch = useDispatch();
    const isAddTaskModalVisible = useSelector(state => state.addTaskModal.isVisible);

    return (
        <div className="app">
            <Modal isVisible={ isAddTaskModalVisible }>
                <AddTaskForm />
            </Modal>
            <div className="app__heading-actions-container">
                <ButtonDefault onClick={ () => dispatch({ type: 'SHOW_MODAL', payload: true }) }>Create task</ButtonDefault>
            </div>
            <TasksTable />
        </div>
    );
}

export default Tasks;
