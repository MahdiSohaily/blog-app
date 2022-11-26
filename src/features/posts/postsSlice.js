import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  return await client.get('posts');
});

export const addPost = createAsyncThunk('posts/addPost', async (data) => {
  return await client.post('posts', data);
});

const postsAdapter = createEntityAdapter();
export const { selectIds: selectPostIds, selectById: selectPostById } =
  postsAdapter.getSelectors((state) => state.posts);

const initialState = postsAdapter.getInitialState({
  status: 'ideal',
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      postsAdapter.upsertMany(state, action.payload);
      state.status = 'success';
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'error';
      console.log(action.payload);
    },
    [addPost.fulfilled]: postsAdapter.addOne,
  },
});

export default postsSlice.reducer;
