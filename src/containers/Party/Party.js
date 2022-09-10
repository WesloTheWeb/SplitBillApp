import React from 'react';
import classes from './Party.module.scss';

const { poolContainer } = classes;

const Party = (props) => {
    return (
        <section className={poolContainer}>
            <h2 className="header-text">hello</h2>
        </section>
    );
};


export default Party;