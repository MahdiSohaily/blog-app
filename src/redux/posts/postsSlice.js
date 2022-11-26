import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('posts');
});

// posts reducers function to watch for user interactions
const postsSlice = createSlice({
  name: 'posts',
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.entities = action.payload;
      state.status = 'ideal';
    },
    [fetchPosts.rejected]: () => {
      throw new Error('something went wrong while getting the data!');
    },
  },
});

export default postsSlice.reducer;
