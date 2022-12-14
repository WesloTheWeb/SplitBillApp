import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload;
        }
    }
});

export const { setModal } = modalSlice.actions;
export const selectModal = (state) => state.modal.modal;
export default modalSlice.reducer;