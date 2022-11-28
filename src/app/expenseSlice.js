import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: [
        {
            expenseName: 'Korean BBQ',
            personBeingPaid: 'Wesley',
            cost: 140,
            payers: ['Wesley', 'Laurin'],
        },
        {
            expenseName: 'Drinks',
            personBeingPaid: 'Brittany',
            cost: 80,
            payers: ['Wesley', 'Laurin', 'Bawi', 'Brittany', 'Erik', 'Matthew', 'Yutao', 'Raymond', 'Hien'],
        },
        {
            expenseName: 'Michelin',
            personBeingPaid: 'Laurin',
            cost: 1500,
            payers: ['Wesley', 'Laurin', 'Bawi', 'Brittany', 'Erik'],
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
                cost: action.payload,
                payers: action.payload,
                hostAsParticipant: action.payload,
            });
        },
    }
});

export const { setExpenseBucket } = expenseSlice.actions;
export default expenseSlice.reducer;