import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counter'
import todoSlice from "./slices/todo";
//reducers is the one which handle events 

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//in context to redux every feature is a slice  