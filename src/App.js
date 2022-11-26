import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './app/Navbar';
import AddPost from './features/posts/AddPost';
import PostDate from './features/posts/PostDate';
import PostList from './features/posts/PostList';
import PostsDetails from './features/posts/PostsDetails';
import UserPage from './features/users/UserPage';
import UsersList from './features/users/UsersList';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <AddPost />
              <PostList />
            </Route>
            <Route path="/users" exact>
              <UsersList />
            </Route>
            <Route path="/users/:userId" exact>
              <UserPage />
            </Route>
            <Route path="/posts/:postId" exact>
              <PostsDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
