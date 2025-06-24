import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/landing';
import Awards from './components/Awards/awards';
import Rotary from './components/Rotary/rotary';
import Team from './components/Team/team';
import Sponsors from './components/Sponsors/sponsors';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/rotary" element={<Rotary />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
