import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: []
}

// TODO: Push a "bucket" object that properties are edited and will be pushed into expense array, which will get iterated.
const expenseSlice = createSlice({
    name: 'expenseBucket',
    initialState,
    reducers: {
        setExpenseBucket: (state, action) => {
            state.expenses.push({
                expenseName: action.payload,
                personBeingPaid: action.payload,
                costs: action.payload,
                payers: action.payload,
                hostAsParticipant: action.payload,
                mitigatedCostsPerPerson: action.payload
            });
        },
    }
});

export const { setExpenseBucket } = expenseSlice.actions;
export default expenseSlice.reducer;