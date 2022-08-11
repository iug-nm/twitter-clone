import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Thread from './components/Thread';
import Profile from './components/Profile';
import Login from './components/Login';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const AppLayout = () => (
  <>
  <Navbar />
  <div className='site-content'>
    <Outlet />
  </div>
  <Sidebar />
  </>
);

function App() {

  return (
    <div className="App">
        {/* A améliorer parce qu'il est actuellement impossible de render un element
        en fonction de sa route sans render la navbar et la sidebar avec (login ?) */}
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route element={<AppLayout />}>
              <Route path='/' element={<Thread />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;