import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    partyMembers: []
}

const partySlice = createSlice({
    name: 'party',
    initialState,
    reducers: {
        setPartyMember: (state, action) => {
            state.party = action.payload;
        }
    }
});

export const editParty = (state) => state.party.partyMembers;
export const { setPartyMember } = partySlice.actions;
export default partySlice.reducer;