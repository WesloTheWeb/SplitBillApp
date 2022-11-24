import React from 'react';
import ExpenseForm from '../../containers/ExpenseForm/ExpenseForm';
import AddPartyMembersForm from '../../containers/AddPartyMembersForm/AddPartyMembersForm';
import classes from './Modal.module.scss';

const { modal } = classes;

const Modal = ({ type }) => {
    const renderModalType = (type) => {
        switch (type) {
            case 'expense':
                return (<ExpenseForm />)

            case 'addPartyMembers':
                return (<AddPartyMembersForm />)

            default:
                return null;
        }
    };

    return (
        <section className={modal}>
            {renderModalType(type)}
        </section>
    );
};

export default Modal;