import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/home.page';
import Mint from './pages/mint/mint.page';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
