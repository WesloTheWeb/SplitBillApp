import React from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';
import { useSelector } from 'react-redux';
import classes from './Expenses.module.scss';

const { expenseGrid } = classes;

const Expenses = () => {

    const expenses = useSelector((state) => state.expense.expenses)

    return (
        <section className={expenseGrid}>
            {expenses?.map((activity) => {
                return (
                    <ActivityItem
                        key={activity.expenseName}
                        title={activity.expenseName}
                        personPaid={activity.personBeingPaid}
                        cost={activity.costs}
                        participants={activity.payers}
                        includeHost={activity.hostAsParticipant}
                    />
                )
            })}
        </section>
    );
};

export default Expenses;