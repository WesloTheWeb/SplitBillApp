import React from 'react';
import NameTag from '../../components/NameTag/NameTag';
import classes from './ActivityItem.module.scss';

const { activityContainer, headerRow, participantsRow, totalExpenseRow, dividedSumRow } = classes;

const ActivityItem = ({ title, personPaid, participants, cost }) => {

    return (
        <div className={activityContainer}>
            <section className={headerRow}>
                <h3>{title}</h3>
                <span>Please pay to: <b>{personPaid}</b></span>
            </section>
            <section className={participantsRow}>
                <h4>Participants</h4>
                {/* TODO: Should have its own state of participants separate from the party state */}
                {participants?.map((person) => {
                    return (
                        <NameTag
                            key={person}
                            name={person} />
                    )
                })}
            </section>
            <section className={totalExpenseRow}>
                <span>Total Cost: ${cost.toFixed(2)}</span>
            </section>
            <section className={dividedSumRow}>
                -${(cost / participants.length).toFixed(2)} / Person
            </section>
        </div>
    );
};

export default ActivityItem;