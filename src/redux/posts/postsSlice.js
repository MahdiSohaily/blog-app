import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('posts');
});

// posts reducers function to watch for user interactions
const postsSlice = createSlice({
  name: 'posts',
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export default postsSlice.reducer;
