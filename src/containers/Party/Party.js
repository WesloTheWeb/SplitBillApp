import React from 'react';
import NameTag from '../../components/NameTag/NameTag';
import classes from './Party.module.scss';

const { poolContainer } = classes;

const Party = ({}) => {
    return (
        <section className={poolContainer}>
            <h2 className="header-text">Party Members</h2>
            <NameTag name="Claude" />
            <NameTag name="Hilda" />
            <NameTag name="Lorenz" />
            <NameTag name="Raphael" />
            <NameTag name="Ignatz" />
            <NameTag name="Lysythia" />
            <NameTag name="Marianne" />
            <NameTag name="Leonie" />
            <NameTag name="Byleth" />
        </section>
    );
};

export default Party;