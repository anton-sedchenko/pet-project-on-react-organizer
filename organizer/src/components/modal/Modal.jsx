import React from 'react';
import styles from './Modal.module.css';
import { useDispatch } from "react-redux";

const Modal = ({ children, isVisible }) => {
    const dispatch = useDispatch();
    const rootClasses = [styles.modal];

    if (isVisible) {
        rootClasses.push(styles.active)
    }

    return (
        <div
            className={ rootClasses.join(' ') }
            onClick={ () => dispatch({ type: 'CLOSE_MODAL', payload: false }) }
        >
            <div className={ styles.modalContent } onClick={ (e) => e.stopPropagation() }>
                { children }
            </div>
        </div>
    );
};

export default Modal;
