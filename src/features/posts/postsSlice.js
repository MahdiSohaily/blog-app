import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  return await client.get('posts');
});

export const addNewPost = createAsyncThunk(
  'posts/newPost',
  async (newPostData) => {
    return await client.post('posts', newPostData);
  }
);

export const saveReaction = createAsyncThunk(
  'posts/saveReaction',
  async ({ postId, type }) => {
    await client.post(`/posts/${postId}/reaction/${type}`);
    return { postId, type };
  }
);

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date - a.date,
});

export const {
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectAll: selectAllPosts,
} = postsAdapter.getSelectors((state) => state.posts);

export const selectPostsByUser = createSelector(
  selectAllPosts,
  (state, userId) => userId,
  (posts, userId) => posts.filter((post) => post.user === userId)
);

const initialState = postsAdapter.getInitialState({
  status: 'ideal',
  error: null,
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
      state.error = action.payload;
    },
    [addNewPost.fulfilled]: postsAdapter.addOne,
    [saveReaction.fulfilled]: (state, action) => {
      const { postId, type } = action.payload;
      state.entities[postId].reactions[type] += 1;
    },
  },
});

export default postsSlice.reducer;
