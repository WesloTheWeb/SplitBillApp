import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    overlay: false
}

const overlaySlice = createSlice({
    name: 'overlay',
    initialState,
    reducers: {
        toggleOverlay: (state) => {
            state.overlay = !state.overlay
        }
    },
});

export const { toggleOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;