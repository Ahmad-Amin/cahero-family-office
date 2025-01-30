import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/homepage/HomePage";
import SourcePage from './Pages/sourcePage/SourcePage';
import CatalystPage from './Pages/catalystPage/CatalystPage';
import UnityPage from './Pages/UnityPage/UnityPage';
import LegacyPage from './Pages/LegacyPage/LegacyPage';
import EvolutionPage from './Pages/EvolutionPage/EvolutionPage';
import AscensionPage from './Pages/AscensionPage/AscensionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/source" element={<SourcePage/>} />
        <Route path="/catalyst" element={<CatalystPage/>} />
        <Route path="/unity" element={<UnityPage/>} />
        <Route path="/legacy" element={<LegacyPage/>} />
        <Route path="/evolution" element={<EvolutionPage/>} />
        <Route path="/ascension" element={<AscensionPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

