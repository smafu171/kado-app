import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KadoIntro from './KadoIntro';
import Diagnose from './Diagnose';
import Result from './Result'; // ← これを追加！

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KadoIntro />} />
        <Route path="/diagnose" element={<Diagnose />} />
        <Route path="/result" element={<Result />} /> {/* ← これを追加！ */}
      </Routes>
    </Router>
  );
}

export default App;
