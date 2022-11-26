import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  return await client.get('posts');
});

const postsAdapter = createEntityAdapter();
export const { selectIds: selectPostIds, selectById: selectPostById } =
  postsAdapter.getSelectors((state) => state.posts);

const initialState = postsAdapter.getInitialState({
  status: 'idle',
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
  },
});

export default postsSlice.reducer;
