import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home';
import Details from './pages/details';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:charName" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
