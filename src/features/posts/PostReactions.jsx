const icons = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};
export default function PostReactions({ reactions }) {
  const content = Object.keys(reactions).map((item) => (
    <button key={item} type="button" className="muted-button reaction-button">
      {icons[item]} {reactions[item]}.
    </button>
  ));
  return <div>{content}</div>;
}
