import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Thread from './components/Thread';
import Profile from './components/Profile';
import Login from './components/Login';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

let id = "iug_nm";

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
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route element={<AppLayout />}>
              <Route path='/' element={<Thread />} />
              <Route path={'profile/'+id} element={<Profile user={id} />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;