import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    modal: null
}

// TODO: Needs to be global state to affect modal render.
const renderModalType = (type) => {
    switch (type) {
        case 'expense':
            return (<ExpenseForm />)

        default:
            return null;
    }
};


const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setExpenseModal(state, action: PayloadAction) {
            state.modal = action.payload
        },
    },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;