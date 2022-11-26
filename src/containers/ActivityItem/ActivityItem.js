import React from 'react';
import NameTag from '../../components/NameTag/NameTag';
import classes from './ActivityItem.module.scss';

const { activityContainer, headerRow, participantsRow, totalExpenseRow, dividedSumRow } = classes;

const ActivityItem = ({ title, personPaid, participants, includeHost, cost }) => {

    return (
        <div className={activityContainer}>
            <section className={headerRow}>
                <h3>{title}</h3>
                <h4>{personPaid}</h4>
            </section>
            <section className={participantsRow}>
                {/* TODO: Should have its own state of participants separate from the party state */}
                {participants?.map((person) => {
                    return (
                        <NameTag name={person} />
                    )
                })}
            </section>
            <p>Host included?: {includeHost ? 'yes' : 'no'} </p>
            <section className={totalExpenseRow}>
                ${cost.toFixed(2)}
            </section>
            <section className={dividedSumRow}>
                -${(cost / participants.length).toFixed(2)} / Person
            </section>
        </div>
    );
};

export default ActivityItem;