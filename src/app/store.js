import {configureStore} from "@reduxjs/toolkit";
import todoSlicer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlicer,
    },
})