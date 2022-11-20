import { configureStore } from '@reduxjs/toolkit'
import { expenseModal } from './modalSlice'
import { toggleOverlay } from './overlaySlice'
// import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    modal: expenseModal,
    overlay: toggleOverlay
  }
})
