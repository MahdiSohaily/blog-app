const icons = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eye: '👀',
};
export default function PostReactions({ reactions }) {
  const content = Object.keys(reactions).map((item) => (
    <button type="button" className="muted-button reaction-button">
      {icons[item]} {reactions[item]}.
    </button>
  ));
  return <div>{content}</div>;
}
