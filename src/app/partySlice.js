import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    partyMembers: ['Wesley', 'Laurin']
}

const partySlice = createSlice({
    name: 'party',
    initialState,
    reducers: {
        setPartyMember: (state, action) => {
            state.partyMembers.push(
                action.payload
            );
        }
    }
});

export const { setPartyMember } = partySlice.actions;
export default partySlice.reducer;