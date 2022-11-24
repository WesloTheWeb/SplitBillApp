import React from 'react';
import { useSelector } from 'react-redux';
import NameTag from '../../components/NameTag/NameTag';
import classes from './Party.module.scss';

const { poolContainer } = classes;

const Party = () => {

    const currentParty = useSelector((state) => state.party.partyMembers);

    return (
        <section className={poolContainer}>
            <h2 className="header-text">Party Members</h2>
            {
                currentParty.map((person, idx) => {
                    return <NameTag
                        key={idx}
                        name={person}
                    />
                })
            }
        </section>
    );
};

export default Party;