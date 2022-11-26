import { useSelector } from 'react-redux';
import { selectUserById } from '../users/usersSlice';

export default function PostAuthor({ userId }) {
  const user = useSelector((state) => selectUserById(state, userId));
  return <span>by {user ? user.lastName : 'Unknown Author'}</span>;
}
