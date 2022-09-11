import React from 'react';
import classes from './Button.module.scss';

const { totalSumButton, cancelCTA } = classes;

const Button = ({title, action, type}) => {

    const buttonTypes = {
        nav: totalSumButton,
        cancel: cancelCTA
    }

    const variants = (type) => {
        //TODO: Maybe a switch statement?
        if (type === 'nav') {
            return buttonTypes.nav;
        } else if (type === 'cancel') {
            return buttonTypes.cancel;
        }
    }

    return (
        <button 
            className={variants(type)}
            onClick={action}    
        >
            {title}
        </button>
    );
};

export default Button;