import './App.css';
import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
import Authentication from './pages/Authentication/Authentication';
import Message from './pages/message/message';

function App() {
  return (
    <Routes>
      {/* <Route path="/*" element={<HomePage />} /> */}
      <Route path="/*" element={<Authentication />} />
      <Route path="/messages" element={<Message />} />
    </Routes>
  );
}

export default App;

