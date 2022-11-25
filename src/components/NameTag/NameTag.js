import React from 'react';
import { useDispatch } from 'react-redux';
import { removePartyMember } from '../../app/partySlice';
import classes from './NameTag.module.scss';

const { nameTagContainer, nameTagExitContainer } = classes;

const NameTag = ({ name }) => {

    const dispatch = useDispatch();

    const removeNameHandler = () => {
        dispatch(removePartyMember(name));
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