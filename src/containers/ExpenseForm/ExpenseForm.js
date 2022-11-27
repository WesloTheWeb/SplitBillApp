import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import NameTag from '../../components/NameTag/NameTag';
import Party from '../Party/Party';
import classes from './ExpenseForm.module.scss';

const { expenseFormContainer, expenseFieldsContainer, expensePartyContainer, buttonContainer, payersContainers } = classes;

const ExpenseForm = () => {
    const expenseData = useSelector((state) => state.expense)

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
                </section>
                <section className={expensePartyContainer}>
                    <label>Party Members</label>
                    <Party />
                    <div>
                        <h3>People who are paying:</h3>
                        <p>Drag the list from party to the field below or use the dropdown.</p>
                    </div>
                    <section className={payersContainers}>
                        {expenseData.payers?.map((person) => {
                            return (
                                <NameTag name={person} />
                            )
                        })}
                    </section>
                </section>
                {/* TODO:  Shared state of what participants will be. Drag and drop from party. */}

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