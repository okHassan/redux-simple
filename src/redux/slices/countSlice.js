import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increase(state){
            state.count = state.count + 1
        },
        decrease(state){
            state.count = state.count - 1
        },
        setCount(state, action){
            state.count = action.payload
        }
    }
})

export const { increase, decrease, setCount } = countSlice.actions

export const selectCount = state => state.count.count

export default countSlice.reducer