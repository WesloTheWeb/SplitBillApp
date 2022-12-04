import React from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';
import { useSelector } from 'react-redux';
import classes from './Expenses.module.scss';

const { expenseGrid } = classes;

const Expenses = () => {
    const expenses = useSelector((state) => state.expense.expenses)

    console.log(expenses)

    return (
        <section className={expenseGrid}>
            {expenses?.map((activity) => {
                console.log(activity)
                return (
                    <ActivityItem
                        key={activity.expenseName}
                        title={activity.expenseName}
                        personPaid={activity.personBeingPaid}
                        cost={activity.cost}
                        payers={activity.payers}
                        payNames
                    />
                )
            })}
        </section>
    );
};

export default Expenses;