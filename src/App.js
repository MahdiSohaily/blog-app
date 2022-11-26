import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './app/Navbar';
import AddPost from './features/posts/AddPost';
import PostList from './features/posts/PostList';
import UsersList from './features/users/UsersList';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <switch>
            <Route path="/" exact>
              <AddPost />
              <PostList />
            </Route>
            <Route path="/users" exact>
              <UsersList />
            </Route>
          </switch>
        </div>
      </Router>
    </>
  );
}

export default App;
