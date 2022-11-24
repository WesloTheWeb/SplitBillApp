import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import Button from '../../components/Button/Button';
import { toggleOverlay } from '../../app/overlaySlice';
import { setPartyMember } from '../../app/partySlice';

import '../../App.scss';
import Party from '../Party/Party';

const AddPartyMembersForm = (props) => {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, reset, isSubmitSuccessful, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("partyMemberName")); // watch input value by passing the name of it

    useEffect(() => {

    }, [isSubmitSuccessful]);

    function addingPartyMember() {
        // Add to the party state
        dispatch(setPartyMember())
        reset({
            partyMemberName: 'uwu'
        }, {
            keepErrors: true,
            keepDirty: true,
        });
    }

    function closeForm() {
        dispatch(toggleOverlay());
    }

    return (
        <>
            <h2>Add Party Members</h2>
            <p>To add members to your party fill out the form below of their name and click add.</p>
            <form
                className='formContainer'
                onSubmit={handleSubmit(onSubmit)}
            >
                <section className='sideBySide' >
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        {...register("partyMemberName", { required: true })}
                    />
                    <Button
                        action={addingPartyMember}
                        Btntype="add"
                        title="Add to Party" />
                </section>
            </form>
            <div>
                <Party />
            </div>
            <section >
                <Button
                    action={closeForm}
                    Btntype="cancel"
                    title="Done"
                />
            </section>
        </>
    );
};

export default AddPartyMembersForm;