import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header';
import Lagan from './Components/Lagan';
import Sangeet from './Components/Sangeet';
import Baraat from './Components/Baraat';

function App() {
  return (
    <div className='App'>
      <div className='background_image'></div>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/lagan' exact element={<Lagan />} />
        <Route path='/sangeet' exact element={<Sangeet />} />
        <Route path='/baraat' exact element={<Baraat />} />
      </Routes>
    </div>
  );
}

export default App;
