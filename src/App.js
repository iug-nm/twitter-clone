import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Thread from './components/Thread';
import Profile from './components/Profile';
import Login from './components/Login';
import Terms from './components/Terms';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { users } from './data/users';

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
              {users.map((users) => {
                return <Route 
                        path={'/' + users.account_name} 
                        element = {<Profile user = {users} />} 
                        key = {users.account_name}
                      />
              })}
              <Route path='terms' element={<Terms />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;