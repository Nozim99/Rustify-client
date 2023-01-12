import { Routes, Route } from 'react-router-dom';
import './App.css';
import DoorRaidGroup from './components/views/extra/DoorRaidGroup';
import DoorRaid from './components/views/main/DoorRaid';
import Footer from './components/views/main/Footer';
import Home from './components/views/main/Home';
import Navbar from './components/views/main/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/door-lock-raid' element={<DoorRaid />} />
        <Route path='/door-lock-raid/group' element={<DoorRaidGroup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
