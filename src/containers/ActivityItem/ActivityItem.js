import React from 'react';
import NameTag from '../../components/NameTag/NameTag';
import classes from './ActivityItem.module.scss';

const { activityContainer, headerRow, participantsRow, totalExpenseRow, dividedSumRow } = classes;

const ActivityItem = ({ title, personPaid, cost, participants, includeHost, dividedCosts }) => {

    return (
        <div className={activityContainer}>
            <section className={headerRow}>
                <h3>{title}</h3>
                {personPaid}
            </section>
            <section className={participantsRow}>
                {/* TODO: Should have its own state of participants separate from the party state */}
               {participants?.map((person) => {
                return (
                    <NameTag name={person} />
                )
               })}
            </section>
            <p>Host included?: {includeHost} </p>
            <section className={totalExpenseRow}>
                {cost}
            </section>
            <section className={dividedSumRow}>
                {dividedCosts} / Person
            </section>
        </div>
    );
};

export default ActivityItem;