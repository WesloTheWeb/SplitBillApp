import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ExpenseForm from "../containers/ExpenseForm/ExpenseForm";

const initialState = {
    modal: null
}

// TODO: Needs to be global state to affect modal render.
const renderModalType = (type) => {
    switch (type) {
        case 'expense':
            // return (<ExpenseForm />)
            console.log('Hit from redux');

        default:
            return null;
    }
};

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
        expenseModal: (state) => {
            state.modal = 'expense'
        }
    },
});

export const { expenseModal } = modalSlice.actions;
export default modalSlice.reducer;