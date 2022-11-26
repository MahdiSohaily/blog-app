import { useDispatch } from 'react-redux';
import { saveReaction } from './postsSlice';

const icons = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};
export default function PostReactions({ reactions, postId }) {
  const dispatch = useDispatch();
  const handleReaction = (postId, type) => {
    dispatch(
      saveReaction({
        postId,
        type,
      })
    );
  };

  const content = Object.keys(reactions).map((item) => (
    <button
      key={item}
      type="button"
      className="muted-button reaction-button"
      onClick={() => handleReaction(postId, item)}
    >
      {icons[item]} {reactions[item]}.
    </button>
  ));
  return <div>{content}</div>;
}
