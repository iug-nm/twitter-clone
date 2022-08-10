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
        {/* A améliorer parce qu'il est actuellement impossible de render un element
        en fonction de sa route sans render la navbar et la sidebar avec (login ?) */}
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