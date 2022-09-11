import React from 'react';
import classes from './Button.module.scss';

const { totalSumButton, cancelCTA } = classes;

const Button = ({title, nav, action, cancel, type}) => {

    const buttonTypes = {
        nav: true,
        cancel: cancelCTA
    }

    const variants = (type) => {
        if (type === nav) {
            return nav
        } 
    }

    return (
        <button 
            className={variants(type) ? totalSumButton : ''}
            onClick={action}    
        >
            {title}
        </button>
    );
};

export default Button;