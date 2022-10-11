import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalProps: {
        open: false,
        mode: "create",
        type: "person",
    },
    selectedStatus: "ALL" // ALL / AVAILABLE / ON_PROJECT / IN_PROGRESS / PENDING / DONE
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setModalState: (state, action) => {
        state.modalProps = action.payload;
    },
    toggleSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    }
  },
});


export const { setModalState, toggleSelectedStatus } = uiSlice.actions

export default uiSlice.reducer