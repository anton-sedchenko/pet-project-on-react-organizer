import React from 'react';
import classes from './input.module.css';

const Input = (props) => {
    return (
        <input
            value={props.value}
            onChange={(event) => props.setValue(event.target.value)}
            className={classes.inputDefault}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
};

export default Input;
