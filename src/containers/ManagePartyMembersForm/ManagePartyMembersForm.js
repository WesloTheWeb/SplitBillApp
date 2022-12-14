import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import Button from '../../components/Button/Button';
import { toggleOverlay } from '../../app/overlaySlice';
import { setPartyMember, clearParty } from '../../app/partySlice';
import '../../App.scss';
import classes from './ManagePartyMembersForm.module.scss';
import Party from '../Party/Party';

const { buttonOrderParty } = classes;

const ManagePartyMembersForm = () => {
    const currentParty = useSelector((state) => state.party.partyMembers)
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(setPartyMember(data.partyMemberName))
        reset({
            partyMemberName: ''
        }, {
            keepErrors: true,
            keepDirty: true,
        });
    };

    function closeForm() {
        dispatch(toggleOverlay());
    }

    function clearPartyHandler() {
        dispatch(clearParty());
    }

    return (
        <>
            <h2>Manage Party Members</h2>
            <p>
                To add members to your party fill out the form below of their name and click add. To remove party members,
                hover over their name and click the 'x' to delete from the party. <b>Please have at least 2 people.</b> 
            </p> 
            <form
                className='formContainer'
                onSubmit={handleSubmit(onSubmit)}
            >
                <section className='sideBySide' >
                    <label>Name</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter name"
                            {...register("partyMemberName", { required: "Input cannot be blank." })}
                        />
                        {errors.partyMemberName ?
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
                                Error: {errors.partyMemberName && errors.partyMemberName.message}
                            </div>
                            : null}
                    </div>
                    <Button
                        Btntype="add"
                        title="Add to Party"
                    />
                </section>
            </form>
            <div>
                <Party />
            </div>
            <section className={buttonOrderParty} >
                {
                    currentParty?.length >= 2 ?
                        (<Button
                            action={closeForm}
                            Btntype="done"
                            title="Done"
                        />) :
                        (<Button
                            disabled
                            action={closeForm}
                            Btntype="done"
                            title="Done"
                        />) 
                }

                <Button
                    action={clearPartyHandler}
                    Btntype="clearParty"
                    title="Clear Party"
                />
            </section>
        </>
    );
};

export default ManagePartyMembersForm;