import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalProps: {
        open: false,
        mode: "create",
        type: "person",
    },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setModalState: (state, action) => {
        state.modalProps = action.payload;
    }
  },
});


export const { setModalState } = uiSlice.actions

export default uiSlice.reducer