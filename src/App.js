import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Thread from './components/Thread';
import Profile from './components/Profile';
import Login from './components/Login';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Cookies from './components/Cookies';
import Accessbility from './components/Accessbility';
import Ads from './components/Ads';
import More from './components/More';
import Me from './components/Me';

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
              {/* FIXME Y a-t-il un moyen d'arranger les imports de components pour rendre ça plus intuitif ?*/}
              <Route path='terms' element={<Terms />} />
              <Route path='privacy' element={<Privacy />} />
              <Route path='cookies' element={<Cookies />} />
              <Route path='accessbility' element={<Accessbility />} />
              <Route path='ads' element={<Ads />} />
              <Route path='more' element={<More />} />
              <Route path='me' element={<Me />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;