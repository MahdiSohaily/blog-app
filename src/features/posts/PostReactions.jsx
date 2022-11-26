import React from 'react';

export default function PostReactions({
  like,
  celebrate,
  hearth,
  rocket,
  eye,
}) {
  return (
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
  );
}
