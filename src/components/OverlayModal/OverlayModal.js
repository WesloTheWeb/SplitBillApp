import React from 'react';
import { useDispatch } from 'react-redux';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';
import { toggleOverlay } from '../../app/overlaySlice';

const OverlayModal = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Overlay
                close={() => dispatch(toggleOverlay())}
            />
            <Modal
            // type='expense'
            />
        </>
    );
};

export default OverlayModal;