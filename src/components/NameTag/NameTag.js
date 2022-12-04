import React from 'react';
import { useDispatch } from 'react-redux';
import { removePartyMember } from '../../app/partySlice';
import classes from './NameTag.module.scss';

const { nameTagContainer, nameTagExitContainer } = classes;

const NameTag = ({ name, payNames }) => {

    const dispatch = useDispatch();

    const removeNameHandler = () => {
        dispatch(removePartyMember(name));
    }

    const truncateName = (str, length = 12, ending) => {
        if (length == null) {
            length = 100;
        };

        if (ending == null) {
            ending = "..";
        };

        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };

    return (
        <>
            {
                payNames ?
                    (<div className={nameTagContainer}>
                        {truncateName(name)}
                    </div >)
                    :
                    (<div className={nameTagContainer}>
                        {truncateName(name)}
                        <div
                            className={nameTagExitContainer}
                            onClick={removeNameHandler}
                        >
                            x
                        </div>
                    </div >)
            }
        </>
    );
};

export default NameTag;