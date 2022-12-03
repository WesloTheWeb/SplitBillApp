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

    return (
        <>
            {
                payNames ?
                    (<div className={nameTagContainer}>
                        {name}
                    </div >)
                    :
                    (<div className={nameTagContainer}>
                        {name}
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

// TODO: Different button to affect different states the party member state and the paying state.
// So deleting from payers, won't delete from party member.
// but deleting from partymembers will delete in payers