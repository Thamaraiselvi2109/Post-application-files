import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/Counterapp/Counterslice';
import PostReducer from "../features/Postapp/PostSlice";
import AuthorReducer from "../features/Users/Userslice";
export const Store = configureStore({
    devTools:true,
    reducer:{
        counter:CounterReducer,
        posts:PostReducer,
        author:AuthorReducer
    }
})