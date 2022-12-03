import React from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';
import { useSelector } from 'react-redux';
import classes from './Expenses.module.scss';

const { expenseGrid } = classes;

const Expenses = () => {
    let count = 0;
    const expenses = useSelector((state) => state.expense.expenses)
    
    
    // Attempt 1: ForEash
    // const newData = expenses.forEach(item => {
    //     for (let key in item) {
    //         // console.log(`${key}: ${item[key]}`)
    //         // console.log(`${key}: ${item}`)
    //     }
    // });

    // const newData = expenses.map(item => {
    //     console.log(item)
    // });

    // Object.values(expenses).forEach((val) => {
    //     console.log(val)
    // });

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