import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    partyMembers: []
}

const partySlice = createSlice({
    name: 'party',
    initialState,
    reducers: {
        addPartyMember: (state, action) => {
            state.party = action.payload;
        }
    }
});

export const editParty = (state) => state.party.partyMembers;
export default partySlice.reducer;