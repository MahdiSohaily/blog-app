import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './app/Navbar';
import AddPost from './features/posts/AddPost';
import PostList from './features/posts/PostList';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <AddPost />
          <PostList />
        </div>
      </Router>
    </>
  );
}

export default App;
