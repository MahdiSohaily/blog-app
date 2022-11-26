import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './app/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">app</div>
      </Router>
    </>
  );
}

export default App;
