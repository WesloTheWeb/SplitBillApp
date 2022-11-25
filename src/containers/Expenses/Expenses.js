import React from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';
import { useSelector } from 'react-redux';
import classes from './Expenses.module.scss';

const { expenseGrid } = classes;

const Expenses = () => {

    const expenses = useSelector((state) => state.expense.expenses)

    /*TODO: PROBLEM
    - Pushing an object to the global state array of expenses.
    - Need a way to push the values from key-vals from payload
    to pass as props so component can be filled appropriately.
    - Map might not be the method, tried for of loops.
    - Created a example initial state that is being logged.
    */

    const item = (activity) => {
        for (const [key, value] of Object.entries(activity)) {
            console.log(`${key}: ${value}`)
        }
    }
    console.log(item(expenses))

    return (
        <section className={expenseGrid}>
            {/* {expenses.expense?.map((activity) => {
                return (
                    <ActivityItem
                        title="owo"
                        PersonPaid={activity.personBeingPaid}
                        cost={activity.costs}
                        participants={activity.payers}
                        includeHost={activity.hostAsParticipant}
                        dividedCosts={activity.mitigatedCostsPerPerson}
                    />

                )
            })} */}
             
        </section>
    );
};

export default Expenses;