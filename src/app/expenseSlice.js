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
            expenseName: 'Drinks',
            personBeingPaid: 'Marianne',
            cost: 80,
            payers: ['Marianne', 'Claude', 'Hilda', 'Ingrid', 'Huebert', 'Flayn', 'Byleth', 'Ferdinand', 'Victor'],
        },
        {
            expenseName: 'Michelin',
            personBeingPaid: 'Hilda',
            cost: 1500,
            payers: ['Hilda', 'Marianne', 'Ingrid', 'Huebert', 'Flayn'],
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