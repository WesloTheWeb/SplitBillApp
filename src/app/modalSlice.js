import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        // expenseModal: (type) => {
        //     console.log('accessed expense slice')
        //     switch (type) {
        //         case 'expense':
        //             return (<ExpenseForm />)
        //         default:
        //             return null;
        //     }
        // }
        setModal: (state, action) => {
            state.modal = action.payload;
        }
    }
});

export const { setModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.modal;

export default modalSlice.reducer;