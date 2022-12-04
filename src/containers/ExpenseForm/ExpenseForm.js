import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { setExpenseBucket } from '../../app/expenseSlice';
import { toggleOverlay } from '../../app/overlaySlice';
import Button from '../../components/Button/Button';
import Party from '../Party/Party';
import classes from './ExpenseForm.module.scss';

const { buttonContainer, payersContainers } = classes;

const ExpenseForm = () => {
    const dispatch = useDispatch();
    const availablePartyMembers = useSelector((state) => state.party.partyMembers);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        parseInt(data.cost);
        let count = 0;
        // Checks if form is filled all the way.
        for (let property in data) {
            if (data.hasOwnProperty(property)) {
                count++;
            };
        };

        if (count === 4 && data.payers.length > 0) {
            dispatch(setExpenseBucket(data));
            dispatch(toggleOverlay());
        };
    };

    const closeForm = () => {
        dispatch(toggleOverlay());
    };

    const truncateName = (str, length = 12, ending) => {
        if (length == null) {
            length = 100;
        };

        if (ending == null) {
            ending = "..";
        };

        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };

    return (
        <>
            <h2>Add Expense</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <section className='formContainer'>
                    <div>
                        <label>Expense Name</label>
                        <input
                            type="text"
                            placeholder="Expense Name"
                            {...register("expenseName", { required: "Input cannot be blank." })}
                        />
                        <label>Person being paid</label>
                        <select {...register("personBeingPaid", { required: "Input cannot be blank." })}>
                            <option value="none" defaultValue disabled hidden>Select a party member</option>
                            {availablePartyMembers.map((person, id) => {
                                return (
                                    <option key={id}>{person}</option>
                                );
                            })}
                        </select>
                        <label>Cost of expense</label>
                        <input
                            type="number"
                            placeholder="$ total amount"
                            {...register("cost", {
                                required: "Cost cannot be blank.", valueAsNumber: true,
                            })}
                        />
                        <h3>People who are paying:</h3>
                        <p>Below is a list of available party members. Check each person name that is expected to pay then click submit when finished.</p>
                    </div>
                    <div>
                        <label>Party Members</label>
                        <Party
                            minified
                        />
                    </div>
                </section>
                <section>
                    <div className={payersContainers}>
                        {availablePartyMembers?.map((person, idx) => {
                            return (
                                <div key={idx} >
                                    <input
                                        id={idx}
                                        {...register("payers")}
                                        type="checkbox"
                                        value={person}
                                    />
                                    <label htmlFor={idx}> {truncateName(person)} </label>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className={buttonContainer}>
                    <Button
                        action={closeForm}
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