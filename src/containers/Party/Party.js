import React from 'react';
import { useSelector } from 'react-redux';
import NameTag from '../../components/NameTag/NameTag';
import classes from './Party.module.scss';

const { poolBase, poolContainer, minifiedPoolContainer, } = classes;

const Party = ({ minified }) => {

    const currentParty = useSelector((state) => state.party.partyMembers);

    return (
        <section className={`${poolBase} ${minified ? minifiedPoolContainer : poolContainer}`}>
            <h2 className="header-text">Party Members ({currentParty.length})</h2>
            {currentParty.length > 0 ?
                currentParty?.map((person, idx) => {
                    return <NameTag
                        key={idx}
                        name={person}
                    />
                })
                :
                <p>There are currently nobody in the party.</p>
            }
        </section>
    );
};

export default Party;