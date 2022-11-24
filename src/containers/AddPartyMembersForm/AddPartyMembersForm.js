import React from 'react';
import Button from '../../components/Button/Button';
import '../../App.scss';

const AddPartyMembersForm = (props) => {

    return (
        <>
            <h2>Add Party Members</h2>
            <p>To add members to your party fill out the form below of their name and click add.</p>
            <form className='formContainer'>
                <section className='sideBySide' >
                    <label>Name</label>
                    <input type="text" placeholder="First Name" />
                    <Button
                        type='add'
                        title="Add to Party " />
                </section>
            </form>
            <section >
                <Button
                    type='cancel'
                    title="Cancel" />

            </section>
        </>
    );
};

export default AddPartyMembersForm;