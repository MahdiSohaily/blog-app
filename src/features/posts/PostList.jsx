import React from 'react';

export default function PostList() {
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      <article className="post-excerpt">
        <h3>title</h3>
        <div>
          <span>by name</span>
          <span title="2021-02-06T21:36:04.822Z">
            &nbsp; <i>28 minutes ago</i>
          </span>
        </div>
        <p className="post-content">
          The zeitgeist contends that one cannot separate cranberries from
          gentle deers! The literature would{' '}
        </p>

        <div>
          <button type="button" className="muted-button reaction-button">
            👍 0
          </button>
          <button type="button" className="muted-button reaction-button">
            🎉 0
          </button>
          <button type="button" className="muted-button reaction-button">
            ❤️ 0
          </button>
          <button type="button" className="muted-button reaction-button">
            🚀 0
          </button>
          <button type="button" className="muted-button reaction-button">
            👀 0
          </button>
        </div>
        <a
          className="button muted-button"
          href="/posts/oE1ZviL86I8TznPnEPAy0"
          dideo-checked="true"
        >
          View Post
        </a>
      </article>
    </section>
  );
}
