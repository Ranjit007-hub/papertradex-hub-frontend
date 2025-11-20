import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TradePage from './pages/TradePage';
import PortfolioPage from './pages/PortfolioPage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/trade' element={<TradePage />} />
      <Route path='/portfolio' element={<PortfolioPage />} />
    </Routes>
  );
}
export default App;
