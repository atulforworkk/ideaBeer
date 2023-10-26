import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    initialState: {
        todos: []
    },
    name: 'todo',
    reducers: {
        addTodo: (state, { payload }) => {
            state.todos.push(payload);
        },
        markComplete: (state, { payload }) => {
            state.todos = payload;
        },
        remove: (state, { payload }) => {
            state.todos = payload;
        },
        markAllComplete: (state, { payload }) => {
            state.todos = payload;
        },
        markAllIncomplete: (state, { payload }) => {
            state.todos = payload;
        },
        deleteAll: (state,) => {
            state.todos = [];
        }
    }
});

export const { addTodo, markComplete, remove, markAllIncomplete, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
