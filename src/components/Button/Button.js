import React from 'react';
import classes from './Button.module.scss';

const { totalSumButton, cancelCTA, addCTA } = classes;

const Button = ({ title, action, Btntype }) => {

    const buttonTypes = {
        nav: totalSumButton,
        cancel: cancelCTA,
        addMember: addCTA
    }

    const variants = (Btntype) => {
        switch (Btntype) {
            case 'nav':
                return buttonTypes.nav;

            case 'cancel':
                return buttonTypes.cancel;

            case 'add':
                return buttonTypes.addMember;
        }
    };

    return (
        <button
            className={variants(Btntype)}
            onClick={action}
        >
            {title}
        </button>
    );
};

export default Button;