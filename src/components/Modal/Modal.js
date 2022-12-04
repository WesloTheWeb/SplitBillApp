import React from 'react';
import ExpenseForm from '../../containers/ExpenseForm/ExpenseForm';
import ManagePartyMembersForm from '../../containers/ManagePartyMembersForm/ManagePartyMembersForm';
import EditForm from '../../containers/EditForm/EditForm';
import classes from './Modal.module.scss';

const { modal } = classes;

const Modal = ({ type }) => {
    const renderModalType = (type) => {
        switch (type) {
            case 'expense':
                return (<ExpenseForm />)

            case 'manageParty':
                return (<ManagePartyMembersForm />)

            case 'editExpense':
                return (<EditForm />)

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