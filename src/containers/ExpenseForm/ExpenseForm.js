import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import NameTag from '../../components/NameTag/NameTag';
import Party from '../Party/Party';
import classes from './ExpenseForm.module.scss';

const { buttonContainer, payersContainers } = classes;

const ExpenseForm = () => {
    const expenseData = useSelector((state) => state.expense);
    const availablePartyMembers = useSelector((state) => state.party.partyMembers);

    const sanitizedArr = new Set(expenseData.payers);
    return (
        <>
            <h2>Add Expense</h2>
            <form>
                <section className='formContainer'>
                    <div>
                        <label>Expense Name</label>
                        <input type="text" placeholder="Expense Name" />
                        <label>Person being paid</label>
                        {/* <input type="text" placeholder="Name" /> */}
                        <select>
                            <option value="none" selected disabled hidden>Select a party member</option>
                            {availablePartyMembers.map((person, id) => {
                                return (
                                    <option key={id}>{person}</option>
                                );
                            })}
                        </select>

                        <label>Cost of expense</label>
                        <input type="text" placeholder="$ total amount" />
                    </div>
                    <div>
                        <label>Party Members</label>
                        <Party />
                    </div>
                </section>
                <section>
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
                <section className='grid-side-by-side'>
                    <div>
                        <select>
                            <option value="none" selected disabled hidden>Select a party member</option>
                            {availablePartyMembers.map((person, id) => {
                                return (
                                    <option key={id}>{person}</option>
                                );
                            })}
                        </select>
                    </div>
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