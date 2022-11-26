import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUserById } from '../users/usersSlice';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import PostReactions from './PostReactions';
import { selectPostById } from './postsSlice';

export default function PostsDetails() {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <PostDate date={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <PostReactions reactions={post.reactions} postId={post.id} />
        <a
          className="button"
          href="/editPost/Sq0OZJyMWGrjkJAX7BzU-"
          dideo-checked="true"
        >
          Edit Post
        </a>
      </article>
    </section>
  );
}
