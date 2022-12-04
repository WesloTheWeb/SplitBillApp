import React from 'react';
import { useSelector } from 'react-redux';
import classes from './TotalSum.module.scss';

const { totalContainer, number } = classes;

const TotalSum = () => {

    const totalAmountOwed = useSelector((state) => (state.expense))

    const sum = Object.values(totalAmountOwed.expenses).reduce((acc, cV) => {
        return acc + cV.cost;
    }, 0);

    const sanitizeString = (str) => {
        return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <>
            <div className={totalContainer}>
                <p>
                    Total amount owed:
                </p>
                {/* {sum} */}
                {/* <span className={number}>${sanitizeString(sum?.toFixed(2))}</span> */}
                <span className={number}>${sanitizeString(sum)}</span>
            </div>
        </>
    );
};

export default TotalSum;