import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/todo/todoslice'

export const store = configureStore({
    reducer: todoReducer
})