import React from 'react';
import ExpenseForm from '../../containers/ExpenseForm/ExpenseForm';
import classes from './Modal.module.scss';

const { modal } = classes;

const Modal = ({ expense }) => {
    return (
        <section className={modal}>
            {expense ?
                <ExpenseForm />
                : null}
        </section>
    );
};

export default Modal;