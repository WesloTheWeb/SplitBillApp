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
    const { register, handleSubmit, formState: { errors } } = useForm();

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
                            {...register("expenseName", { required: "Expense name cannot be blank." })}
                        />
                        {errors.expenseName ?
                            <div className='errorMessage'>
                                <svg
                                    className="w-2 h-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                                Error: {errors.expenseName && errors.expenseName.message}
                            </div>
                            : null}
                        <label>Person being paid</label>
                        <select {...register("personBeingPaid", { required: "Requires a designated person." })}>
                            <option value="none" defaultValue disabled hidden>Select a party member</option>
                            {availablePartyMembers.map((person, id) => {
                                return (
                                    <option key={id}>{person}</option>
                                );
                            })}
                        </select>
                        {errors.personBeingPaid ?
                            <div className='errorMessage'>
                                <svg
                                    className="w-2 h-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                                Error: {errors.personBeingPaid && errors.personBeingPaid.message}
                            </div>
                            : null}
                        <label>Cost of expense</label>
                        <input
                            type="number"
                            placeholder="$ total amount"
                            {...register("cost", {
                                required: "Cost cannot be blank.", valueAsNumber: true,
                            })}
                        />
                        {errors.cost ?
                            <div className='errorMessage'>
                                <svg
                                    className="w-2 h-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                                Error: {errors.cost && errors.cost.message}
                            </div>
                            : null}
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