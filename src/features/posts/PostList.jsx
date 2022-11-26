import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts, selectPostIds } from './postsSlice';

export default function PostList() {
  const postIds = useSelector(selectPostIds);
  const content = postIds.map((id) => <Post key={id} id={id} />);
  const status = useSelector((state) => state.posts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if ('ideal' === status) {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
}
