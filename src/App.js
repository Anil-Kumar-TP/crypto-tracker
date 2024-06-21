import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/coin/:id' element={<CoinPage />} />
          <Route path='/compare' element={<ComparePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
