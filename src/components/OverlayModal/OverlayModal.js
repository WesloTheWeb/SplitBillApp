import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';
import { toggleOverlay } from '../../app/overlaySlice';
import { selectModal } from '../../app/modalSlice';

const OverlayModal = () => {
    const modalType = useSelector(selectModal);
    const dispatch = useDispatch();

    return (
        <>
            <Overlay
                close={() => dispatch(toggleOverlay())}
            />
            <Modal
                type={modalType}
            />
        </>
    );
};

export default OverlayModal;