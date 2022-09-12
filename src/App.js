import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu/menu';
import HomePage from './components/pages/home-page';
import DriftPage from './components/pages/drift-page';
import TimeAttackPage from './components/pages/time-attack-page';
import ForzaPage from './components/pages/forza-page';

function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
