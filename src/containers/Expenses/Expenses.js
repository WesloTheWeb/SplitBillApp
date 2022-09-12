import React from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';
import classes from './Expenses.module.scss';

const { expenseGrid } = classes;

const Expenses = (props) => {
    return (
        <section className={expenseGrid}>
            <ActivityItem />
        </section>
    );
};

export default Expenses;