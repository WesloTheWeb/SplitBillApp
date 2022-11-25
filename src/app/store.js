import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import overlayReducer from './overlaySlice';
import partyReducer from './partySlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    overlay: overlayReducer,
    party: partyReducer
  }
});