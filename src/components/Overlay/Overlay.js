import { React } from 'react';
import classes from './Overlay.module.scss';

const { overlay } = classes;

const Overlay = ({close}) => {

    return (
        <div 
            className={overlay}
            onClick={close}    
        />
    );
};

export default Overlay;