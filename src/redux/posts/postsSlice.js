import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  
});


// posts reducers function to watch for user interactions
const postsSlice = createSlice({
  name: 'posts',
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export default postsSlice.reducer;
