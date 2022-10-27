import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slices/countSlice'

export const store = configureStore({
    reducer: {
        count: countReducer
    }
})