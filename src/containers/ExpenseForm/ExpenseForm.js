import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { setExpenseBucket } from '../../app/expenseSlice';
import { toggleOverlay } from '../../app/overlaySlice';
import Button from '../../components/Button/Button';
import NameTag from '../../components/NameTag/NameTag';
import Party from '../Party/Party';
import classes from './ExpenseForm.module.scss';

// TODO: Might be better UX to do a search field to select people than dropdown. I.e type first few letters of available party
// member and it will populate the field.

const { buttonContainer, payersContainers } = classes;

const ExpenseForm = () => {

    const [peopleArr, setPeopleArr] = useState([]);
    const [payerNameValue, setPayerNameValue] = useState('')
    const dispatch = useDispatch();
    const availablePartyMembers = useSelector((state) => state.party.partyMembers);

    const { register, handleSubmit, reset, formState: { errors }, control } = useForm();

    const onSubmit = (data) => {
        parseInt(data.cost);
        let count = 0;
        console.log(data);
        // Checks if form is filled all the way.
        for (let property in data) {
            if (data.hasOwnProperty(property)) {
                count++;
            };
        };

        if (count === 4 && data.payers.length > 0) {
            console.log(typeof data.cost);
            dispatch(setExpenseBucket(data));
            dispatch(toggleOverlay());
        };
    };

    const closeForm = () => {
        dispatch(toggleOverlay());
    };

    const handleChange = (event) => {
        setPayerNameValue(event.target.value);
    };

    const addPayers = () => {
        const sanitizeInput = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };

        setPeopleArr([...peopleArr, sanitizeInput(payerNameValue)]);
        setPayerNameValue('')
        console.log(peopleArr);
    };
    // TODO: Should only add from names available on partyMember slice. Error validation.
    // TODO: Filter each time shortcut for names on party member.
    // Don't want to add a payer to non-existant party member.

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
                        <label>Participants</label>
                        <span>The textbox below will show a list of available party members, whom you can add that will be the ones paying for this expense.</span>
                        <div className='addingPayersContainer'>
                            <input
                                type="text"
                                onChange={handleChange}
                                placeholder='Person(s) name'
                                value={payerNameValue}
                            />
                            <div
                                onClick={addPayers}
                            >+ Add</div>
                        </div>
                    </div>
                    <div>
                        <label>Party Members</label>
                        <Party
                            minified
                        />
                    </div>
                </section>
                <section>
                    <h3>People who are paying:</h3>
                    <p>After entering the name of people who are expected to pay, check mark them below to finalize. Anybody not checkmarked will not be added to tally.</p>
                    <div className={payersContainers}>
                        {peopleArr?.map((person, idx) => {
                            return (
                                <div key={idx} >
                                    <input
                                        id={idx}
                                        {...register("payers")}
                                        type="checkbox"
                                        value={person}
                                    />
                                    <label htmlFor={idx}> {person} </label>
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