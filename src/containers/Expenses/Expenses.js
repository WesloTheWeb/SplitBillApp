import React from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';
import { useSelector } from 'react-redux';
import classes from './Expenses.module.scss';

const { expenseGrid } = classes;

const Expenses = () => {

    const expenses = useSelector((state) => state.expenses)

    return (
        <section className={expenseGrid}>
            {expenses?.map((activity) => {
                return (
                    <ActivityItem
                        title={activity.expenseName}
                        PersonPaid={activity.personBeingPaid}
                        cost={activity.costs}
                        participants={activity.payers}
                        includeHost={activity.hostAsParticipant}
                        dividedCosts={activity.mitigatedCostsPerPerson}
                    />

                )
            })}
        </section>
    );
};

export default Expenses;