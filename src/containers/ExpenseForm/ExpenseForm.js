import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { setExpenseBucket, addPersonToPayers } from '../../app/expenseSlice';
import { toggleOverlay } from '../../app/overlaySlice';
import Button from '../../components/Button/Button';
import NameTag from '../../components/NameTag/NameTag';
import Party from '../Party/Party';
import classes from './ExpenseForm.module.scss';

// TODO: Need a way to register an input of an array, pushing each person into it (Payers).
// TODO: Might be better UX to do a search field to select people than dropdown. I.e type first few letters of available party
// member and it will populate the field.

const { buttonContainer, payersContainers } = classes;

const ExpenseForm = () => {
    const [peopleArr, setPeopleArr] = useState([])
    const dispatch = useDispatch();
    const expenseData = useSelector((state) => state.expense);
    const availablePartyMembers = useSelector((state) => state.party.partyMembers);

    // const sanitizedArr = [new Set(expenseData.payers);]

    const { register, handleSubmit, reset, formState: { errors }, control } = useForm();

    // const onSubmit = (data) => {
    //     dispatch(setExpenseBucket(data.expenses))
    //     // reset({
    //     //     expenseName: '',
    //     //     personBeingPaid: '',
    //     //     costs: '',
    //     //     payers: [],
    //     // }, {
    //     //     keepErrors: true,
    //     //     keepDirty: true,
    //     // });
    // };

    const onSubmit = (data) => {
        parseInt(data.cost); // need to turn string into int
        let count = 0;
        console.log(data);
        // a check so if an object key val is missing do not close the modal
        // TODO: Possible check, we know the number of objects supposed to be filled.
        for (let property in data) {
            if (data.hasOwnProperty(property)) {
                count++;
            };
        };

        if (count === 4 && data.payers.length > 0) { // string for now but needs to be an array
            console.log(typeof data.cost)
            dispatch(setExpenseBucket(data))
            dispatch(toggleOverlay())
        }

    }

    // TODO: We need to edit the react hook form payload before dispatching to state
    // Since we are editing our final data's array pushing people and later removing people.
    // TODO: hook to the input value.
    // User types name, hits button, THEN name gets added to payers: [],
    // problem is its intermediate interim step.
    // we are 2 data layers deep. sub-data --> data --> dispatch(data)

    const addPayers = () => {
        // dispatch(addPersonToPayers(data.payers));
        // data.payers.push(person);
        setPeopleArr([...peopleArr, 'clicked']);

        // TODO: clear text field after each hit. 
        // TODO: make sure React Hook Form registers the array, possibly done via ref prop. See example
        handleSubmit(onSubmit);
        // console.log(peopleArr);
    }

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
                            {...register("cost", { required: "Cost cannot be blank.",     valueAsNumber: true,
                        })}
                        />
                        {/* TODO: Create input and button so user type name and adds to party. */}
                        <label>Participants</label>
                        <span>The textbox below will show a list of available party members, whom you can add that will be the ones paying for this expense.</span>
                        <div className='addingPayersContainer'>
                            <input
                                type="text"
                                placeholder='Person(s) name'
                                {...register("payers", { required: "At least one other person is required here. " })}
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
                    {/* TODO:  Shared state of what participants will be. Drag and drop from party. */}
                    <h3>People who are paying:</h3>
                    <p>Drag the list from party to the field below or use the dropdown.</p>
                    <div className={payersContainers}>
                        {peopleArr?.map((person, idx) => {
                            return (
                                <span key={idx}>{person}</span>
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

/* PLAN.
1. Combine useState to act as a dynamic array to add or remove people.
2. Each array item from that dynamic array will be tied to a key (i.e payers)
3. Once form is completed, handle submit *should* load all the elements in that payers array into one array
sent in with the "data" from the completed form.
4. Once the data is finished, pass it to the dispatch RTK hook as the payload that should update the global state (outside).


*/