import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const todoStore = configureStore({
    reducer:{
        todos:todoSlice
    }
})

export default todoStore