import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: [
        {
            expenseName: 'Korean BBQ',
            personBeingPaid: 'Wesley',
            costs: 140,
            payers: ['Wesley', 'Laurin'],
            hostAsParticipant: true,
        },
        {
            expenseName: 'Drinks',
            personBeingPaid: 'Wesley',
            costs: 80,
            payers: ['Wesley', 'Laurin', 'Bawi', 'Brittany', 'Erik', 'Matthew', 'Yutao', 'Raymond', 'Hien'],
            hostAsParticipant: true,
        },
    ]
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