import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseForm from '../../containers/ExpenseForm/ExpenseForm';
import classes from './Modal.module.scss';
import { expenseModal } from '../../app/modalSlice';

const { modal } = classes;

const Modal = ({ type }) => {
    const modalExpense = useSelector((modal) = modal.modal);
    const dispatch = useDispatch();

    // TODO: Needs to be global state to affect modal render.
    const renderModalType = (type) => {
        switch (type) {
            case 'expense':
                return (<ExpenseForm />)

            case 'example':
                return (<ExpenseForm />)

            default:
                return null;
        }
    };

    return (
        <section className={modal}>
            {renderModalType(modalExpense)}
        </section>
    );
};

export default Modal;