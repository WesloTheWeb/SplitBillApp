import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: [
        {
            expenseName: 'Korean BBQ',
            personBeingPaid: 'Claude',
            cost: 140,
            payers: ['Claude', 'Hilda'],
        },
        {
            expenseName: 'Steakhouse',
            personBeingPaid: 'Marianne',
            cost: 1500.43,
            payers: ['Marianne', 'Claude', 'Hilda', 'Ingrid', 'Huebert', 'Flayn', 'Byleth', 'Ferdinand', 'Victor'],
        },
        {
            expenseName: 'Round of drinks at the Merchant',
            personBeingPaid: 'Hilda',
            cost: 98.5,
            payers: ['Hilda', 'Marianne', 'Ingrid', 'Huebert', 'Flayn'],
        },
    ]
}

const expenseSlice = createSlice({
    name: 'expenseBucket',
    initialState,
    reducers: {
        setExpenseBucket: (state, action) => {
            state.expenses.push(action.payload);
        },
        removeExpenseBucket: (state, action) => {
            console.log(action);
            state.expenses = state.expenses.filter((expense) => expense !== action.payload);
        }
    }
});

export const { setExpenseBucket, removeExpenseBucket } = expenseSlice.actions;
export default expenseSlice.reducer;