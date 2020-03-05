import React from 'react';
import { ButtonProps } from '../Interfaces/interfaces';


const Button = (props: ButtonProps) => {
    const { onClick, label, disabled } = props;

    return <button
        onClick={onClick}
        disabled={disabled}
    >
        {label}
    </button>
}

export default Button;