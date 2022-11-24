import React from 'react';
import Button from '../../components/Button/Button';
import classes from './TotalSum.module.scss';

const { totalContainer, number } = classes;

const TotalSum = ({ amount, edit }) => {
    return (
        <>
            <div className={totalContainer}>
                <p>
                    Total amount owed:
                </p>
                <span className={number}>${Math.round((amount * 100) / 100).toFixed(2)}</span>
            </div>
            {/* <Button
                type='nav'
                action={edit}
                title="Edit total amount" /> */}
        </>
    );
};

export default TotalSum;