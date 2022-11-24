import React from 'react';
import Button from '../../components/Button/Button';
import Party from '../Party/Party';
import classes from './ExpenseForm.module.scss';

const { expenseFormContainer, expenseFieldsContainer, expensePartyContainer, buttonContainer } = classes;

const ExpenseForm = (props) => {

    return (
        <>
            <h2>Add Expense</h2>
            <form className={expenseFormContainer}>
                <section className={expenseFieldsContainer} >
                    <label>Expense Name</label>
                    <input type="text" placeholder="Expense Name" />
                    <label>Person being paid</label>
                    <input type="text" placeholder="Name" />
                    <label>Cost of expense</label>
                    <input type="text" placeholder="$ total amount" />
                    <label>List of participants</label>
                    {/* TODO:  Shared state of what participants will be. Drag and drop from party. */}
                </section>
                <section className={expensePartyContainer}>
                    <label>Party Members</label>
                    <Party />
                </section>
                <section className={buttonContainer}>
                    <Button 
                        Btntype='cancel'
                        title="Cancel" />
                    <Button
                        title="Submit" />
                </section>
            </form>
        </>
    );
};

export default ExpenseForm;