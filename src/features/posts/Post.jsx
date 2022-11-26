import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import PostReactions from './PostReactions';
import { selectPostById } from './postsSlice';

export default function Post({ id }) {
  const post = useSelector((state) => selectPostById(state, id));
  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <PostDate date={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 200)}</p>
      <PostReactions reactions={post.reactions} />
      <Link
        className="button muted-button"
        to={`/posts/${id}`}
        dideo-checked="true"
      >
        View Post
      </Link>
    </article>
  );
}
