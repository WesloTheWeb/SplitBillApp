import React from 'react';
import classes from './Button.module.scss';

const { totalSumButton } = classes;

const Button = ({title, nav, action}) => {
    return (
        <button 
            className={nav ? totalSumButton : ''}
            onClick={action}    
        >
            {title}
        </button>
    );
};


export default Button;