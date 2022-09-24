import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AddPersons from './AddPersons'
import EditPersons from './EditPersons'
import { setModalState } from "../../../slices/uiSlice";
import { Modal, Box } from '@mui/material'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#ffffff',
    borderRadius: '10px',
    p: 4,
};

const PersonModal = () => {
    const dispatch = useDispatch();
    const handleClose = () => dispatch(setModalState({ open: false }))
    const modalState = useSelector((state) => state.ui)
    return (
        <Modal
            open={modalState.modalProps.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={style}
            >
                {modalState.modalProps.mode === "create" && <AddPersons />}
                {modalState.modalProps.mode === "edit" && <EditPersons />}
            </Box>
        </Modal>
    );
}

export default PersonModal;

