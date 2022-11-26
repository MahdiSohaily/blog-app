import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice';
import { selectUserById } from './usersSlice';

export default function UserPage() {
  const { userId } = useParams();
  const userPosts = useSelector((state) => selectPostsByUser(state, userId));
  const posts = useSelector(selectAllPosts);
  const user = useSelector((state) => selectUserById(state, userId));

  const content = userPosts.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`} dideo-checked="true">
        {post.title}
      </Link>
    </li>
  ));
  return (
    <section>
      <h2>
        {user && user.name}
        {user && user.lastName}
      </h2>
      <ul>{content}</ul>
    </section>
  );
}
