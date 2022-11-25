import React from 'react';
import classes from './NameTag.module.scss';

const { nameTagContainer, nameTagExitContainer } = classes;

const NameTag = ({ name }) => {

    const removeNameHandler = () => {
        console.log('clicked')
    }

    return (
        <div className={nameTagContainer}>
            {name}
            <div 
                className={nameTagExitContainer}
                onClick={removeNameHandler}
                >
                x
            </div>
        </div>
    );
};

export default NameTag;