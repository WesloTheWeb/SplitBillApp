import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { setExpenseBucket } from '../../app/expenseSlice';
import Button from '../../components/Button/Button';
import NameTag from '../../components/NameTag/NameTag';
import Party from '../Party/Party';
import classes from './ExpenseForm.module.scss';

// TODO: Need a way to register an input of an array, pushing each person into it (Payers).
// TODO: Might be better UX to do a search field to select people than dropdown. I.e type first few letters of available party
// member and it will populate the field.

const { buttonContainer, payersContainers } = classes;

const ExpenseForm = () => {
    const dispatch = useDispatch();
    const expenseData = useSelector((state) => state.expense);
    const availablePartyMembers = useSelector((state) => state.party.partyMembers);

    const sanitizedArr = new Set(expenseData.payers);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(setExpenseBucket(data.expenses))
        reset({
            expenseName: '',
            personBeingPaid: '',
            costs: '',
            payers: [],
        }, {
            keepErrors: true,
            keepDirty: true,
        });
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
                        <select>
                            <option value="none" defaultValue disabled hidden>Select a party member</option>
                            {availablePartyMembers.map((person, id) => {
                                return (
                                    <option key={id}>{person}</option>
                                );
                            })}
                        </select>
                        <label>Cost of expense</label>
                        <input
                            type="text"
                            placeholder="$ total amount"
                            {...register("cost", { required: "Cost cannot be blank." })}
                        />
                    </div>
                    <div>
                        <label>Party Members</label>
                        <Party />
                    </div>
                </section>
                <section>
                    {/* TODO:  Shared state of what participants will be. Drag and drop from party. */}
                    <h3>People who are paying:</h3>
                    <p>Drag the list from party to the field below or use the dropdown.</p>
                    <div className={payersContainers}>
                        {sanitizedArr.payers?.map((person) => {
                            return (
                                <NameTag name={person} />
                            )
                        })}
                    </div>
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