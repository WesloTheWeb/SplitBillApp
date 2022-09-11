import React from 'react';
import classes from './NameTag.module.scss';

const { nameTagContainer } = classes;

const NameTag = ({ name }) => {
    return (
        <span className={nameTagContainer}>
            {name}
        </span>
    );
};

export default NameTag;