import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import overlayReducer from './overlaySlice';
import partyReducer from './partySlice';
// import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    overlay: overlayReducer,
    party: partyReducer
  }
})
