import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllUsers } from './usersSlice';

export default function UsersList() {
  const users = useSelector(selectAllUsers);
  const content = users.map((user) => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`} dideo-checked="true">
        {user.firstName} {user.lastName}
      </Link>
    </li>
  ));
  return (
    <section>
      <h2>Users</h2>
      <ul>{content}</ul>
    </section>
  );
}
