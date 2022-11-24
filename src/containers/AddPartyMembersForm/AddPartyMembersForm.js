import { React } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import Button from '../../components/Button/Button';
import { toggleOverlay } from '../../app/overlaySlice';
import { setPartyMember } from '../../app/partySlice';
import '../../App.scss';
import Party from '../Party/Party';

const AddPartyMembersForm = () => {

    // TODO: Add error-handling for null form. It doesnt allow null, but make it more error shown.

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(setPartyMember(data.partyMemberName))
        reset({
            partyMemberName: ''
        }, {
            keepErrors: true,
            keepDirty: true,
        });

    };
    // console.log(watch("partyMemberName")); // watch input value by passing the name of it

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
                        // action={addingPartyMember}
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