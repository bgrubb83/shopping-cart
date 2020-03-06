import React from 'react';
import { ButtonProps } from '../Interfaces/interfaces';


const Button = (props: ButtonProps) => {
    const { onClick, label, disabled, className } = props;

    return <button
        onClick={onClick}
        disabled={disabled}
        className={className}
    >
        {label}
    </button>
}

export default Button;