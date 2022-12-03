import React from 'react';
import './style.css';

const Button = ({
    label,
    variant,
    type,
    classname,
    size,
    disabled,
    isLoading,
    onClick,

}) => {
    return (
        <button onClick={onClick} type={type} disabled={disabled || isLoading} className={
            `btn 
            ${size} 
            ${disabled ? 'dsiabled' : null} 
            ${classname} 
            ${variant}`
        }>
            {
                isLoading
                    ?
                    <span className='lds-dual-ring'></span>
                    :
                    label
            }
        </button>
    )
}

Button.defaultProps = {
    label: "Test",
    variant: "text",
    type: "button",
    classname: null,
    size: 'small',
    disabled: false,
    isLoading: false,
    onClick: ()=> void 0,
}

export default Button;