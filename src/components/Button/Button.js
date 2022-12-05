import React from 'react';
import classes from './Button.module.scss';

const { totalSumButton, cancelCTA, addCTA, resetCTA, doneCTA, additionCTA } = classes;

const Button = ({ title, action, Btntype, disabled }) => {

    const buttonTypes = {
        nav: totalSumButton,
        cancel: cancelCTA,
        addMember: addCTA,
        done: doneCTA,
        clearParty: resetCTA,
        addition: additionCTA
    }

    const variants = (Btntype) => {
        switch (Btntype) {
            case 'nav':
                return buttonTypes.nav;

            case 'cancel':
                return buttonTypes.cancel;

            case 'add':
                return buttonTypes.addMember;

            case 'done':
                return buttonTypes.done;

            case 'clearParty':
                return buttonTypes.clearParty;

            case 'addition':
                return buttonTypes.addition;
        }
    };

    return (
        <button
            disabled={disabled}
            className={variants(Btntype)}
            onClick={action}
        >
            {title}
        </button>
    );
};

export default Button;