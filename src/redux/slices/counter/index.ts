import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    initialState: { value: 1 }, // Corrected the property name to 'initialState'
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        incrementByValue: (state, { payload }) => {
            state.value = state.value + payload
        },
        decrement: (state) => {
            state.value = state.value - 1
        }
    }
});


export const { decrement, increment, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
