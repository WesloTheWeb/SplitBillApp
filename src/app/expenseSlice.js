import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expense: []
}

// TODO: Push a "bucket" object that properties are edited and will be pushed into expense array, which will get iterated.
const expenseSlice = createSlice({
    name: 'expenseBucket',
    initialState,
    reducers: {
        setExpenseBucket: (state, action) => {
            state.expense.push({
                expenseName: action.payload,
                personBeingPaid: action.payload,
                Costs: action.payload,
                Payers: action.payload,
                hostAsParticipant: action.payload
            });
        },
    }
});

export const { setExpenseBucket } = expenseSlice.actions;
export default expenseSlice.reducer;