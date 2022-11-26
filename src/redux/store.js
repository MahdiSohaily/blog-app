import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './posts/postsSlice';
import usersSlice from './users/usersSlice';

const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
  },
});

export default store;
