import { Link } from 'react-router-dom';

export default function UsersList() {
  return (
    <section>
      <h2>Users</h2>
      <ul>
        <li>
          <Link to="/users/cVirFz5oVb-CA37EApdul" dideo-checked="true">
            Candace Braun
          </Link>
        </li>
        <li>
          <Link to="/users/2ki_W9Uf9jYri0vswEfN2" dideo-checked="true">
            Emiliano Prohaska I
          </Link>
        </li>
        <li>
          <Link to="/users/yixgAD2npsFRh8cNoR8-w" dideo-checked="true">
            Willard Senger
          </Link>
        </li>
      </ul>
    </section>
  );
}
