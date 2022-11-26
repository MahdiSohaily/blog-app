import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts/postsSlice";

const store = configureStore({
    reducer: {
        posts: postsSlice,
    }
})

export default store;