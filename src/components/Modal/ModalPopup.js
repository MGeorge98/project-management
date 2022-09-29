import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setModalState } from "../../slices/uiSlice";
import { Modal, Box } from '@mui/material'
import AddPersons from './PersonModal/AddPersons';
import EditPersons from './PersonModal/EditPersons';
import AddProjectForm from './ProjectModal/AddProjectForm';
import EditProject from './ProjectModal/EditProject';

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

const ModalPopup = () => {
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
                <Box sx={style}>
                    {modalState.modalProps.mode === "CREATE" && modalState.modalProps.type === "PERSON" && <AddPersons />}
                    {modalState.modalProps.mode === "EDIT" && modalState.modalProps.type === "PERSON" && <EditPersons />}
                    {modalState.modalProps.mode === "CREATE" && modalState.modalProps.type === "PROJECT" && <AddProjectForm />}
                    {modalState.modalProps.mode === "EDIT" && modalState.modalProps.type === "PROJECT" && <EditProject />}
                </Box>
            </Modal>
     );
}
 
export default ModalPopup;