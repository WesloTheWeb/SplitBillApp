import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // partyMembers: ['Marianne', 'Claude', 'Hilda', 'Ingrid', 'Huebert', 'Flayn', 'Byleth', 'Ferdinand', 'Victor']
    partyMembers: []
}

const partySlice = createSlice({
    name: 'party',
    initialState,
    reducers: {
        setPartyMember: (state, action) => {
            state.partyMembers.push(
                action.payload
            );
        },
        removePartyMember: (state, action) => {
            const idx = state.partyMembers.indexOf(action.payload)
            // another way 
            // state.partyMembers = state.partyMembers.filter((member) => member !== action.payload );
            state.partyMembers = state.partyMembers.slice(0, idx).concat(state.partyMembers.slice(idx + 1));
        },
        clearParty: (state) => {    
            state.partyMembers = []
        }
    }
});

export const { setPartyMember, removePartyMember, clearParty } = partySlice.actions;
export default partySlice.reducer;