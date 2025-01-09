
import './App.css';
import Leaderboard from './components/Leaderboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        
      </Routes>
    
    </div>
 
  </Router>
  );
}

export default App;
