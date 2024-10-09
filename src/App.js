import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/projects';

function App() {
  return (
    <Router>
      <layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </layout>
    </Router>
  )
}

export default App;
