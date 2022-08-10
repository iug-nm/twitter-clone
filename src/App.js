import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Thread from './components/Thread';
import Profile from './components/Profile';
import Login from './components/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='site-content'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Thread />} />
            <Route path='profile' element={<Profile />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Sidebar />
    </div>
  );
}

export default App;