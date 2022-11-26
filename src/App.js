import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './app/Navbar';
import PostList from './features/posts/PostList';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <PostList />
        </div>
      </Router>
    </>
  );
}

export default App;
