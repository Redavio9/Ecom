import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Authentication from './pages/Authentication/Authentication'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
