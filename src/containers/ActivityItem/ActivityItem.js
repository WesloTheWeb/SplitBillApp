import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeExpenseBucket } from '../../app/expenseSlice';
import NameTag from '../../components/NameTag/NameTag';
import classes from './ActivityItem.module.scss';

const { activityContainer, headerRow, participantsRow, totalExpenseRow, dividedSumRow, menuIcon, menu } = classes;

const ActivityItem = ({ title, personPaid, payers, cost }) => {
    const [menuOpen, isMenuOpen] = useState(false);
    const dispatch = useDispatch();

    const menuHandler = () => {
        isMenuOpen(!menuOpen);
    }

    const moveCloseHandler = () => {
        isMenuOpen(false)
    }

    const removeBucket = () => {
        dispatch(removeExpenseBucket());
    }

    return (
        <div
            className={activityContainer}
            onMouseLeave={moveCloseHandler}
        >
            <div
                className={menuIcon}
                onClick={menuHandler}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            {
                menuOpen ? (
                    <section className={menu}>
                        <button>Edit</button>
                        <button
                            onClick={removeBucket}
                        >Delete</button>
                    </section>
                )
                    : null
            }
            <section className={headerRow}>
                <h3>{title}</h3>
                <span>Please pay to: <b>{personPaid}</b></span>
            </section>
            <section className={participantsRow}>
                <h4>payers</h4>
                {/* Using the payers redux state separate from party members */}
                {payers?.map((person) => {
                    return (
                        <NameTag
                            payNames
                            key={person}
                            name={person} />
                    );
                })}
            </section>
            <section className={totalExpenseRow}>
                <span>Total Cost: ${cost.toFixed(2)}</span>
            </section>
            <section className={dividedSumRow}>
                -${(cost / payers.length).toFixed(2)} / Person
            </section>
        </div>
    )
};

export default ActivityItem;