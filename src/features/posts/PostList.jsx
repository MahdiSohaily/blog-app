import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import { selectPostIds } from './postsSlice';

export default function PostList() {
  const postIds = useSelector(selectPostIds);
  const content = postIds.map((id) => <Post key={id} id={id} />);
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
}
