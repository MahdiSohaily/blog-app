import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts, selectPostIds } from './postsSlice';

export default function PostList() {
  const postIds = useSelector(selectPostIds);
  const status = useSelector((state) => state.posts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if ('ideal' === status) {
      dispatch(fetchPosts());
    }
  });

  let content;
  if ('loading' === status) {
    content = <div className='loader'>loading</div>;
  } else if ('success' === status) {
    content = postIds.map((id) => <Post key={id} id={id} />);
  } else {
    content = <div>Error</div>;
  }
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
}
