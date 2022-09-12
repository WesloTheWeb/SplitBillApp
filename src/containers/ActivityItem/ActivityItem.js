import React from 'react';
import NameTag from '../../components/NameTag/NameTag';
import classes from './ActivityItem.module.scss';

const { activityContainer, headerRow, participantsRow, totalExpenseRow, dividedSumRow } = classes;

const ActivityItem = ({ totalExpense, dividedSum }) => {

    return (
        <div className={activityContainer}>
            <section className={headerRow}>
                <p>
                    Korean BBQ
                </p>
                <NameTag name='Claude' />
            </section>
            <section className={participantsRow}>
                <NameTag name='Hilda' />
                <NameTag name='Marianne' />
                <NameTag name='Lorenz' />
            </section>
            <section className={totalExpenseRow}>
                $506.68
            </section>
            <section className={dividedSumRow}>
                -$46.06 / Person
            </section>
        </div>
    );
};

export default ActivityItem;