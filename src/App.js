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
import TestFile from './components/Testfile';
import Void from './components/Void';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import users from './data/users.json';


export const current_user = {
  name: "Julius in the Coolius",
  username: "iug_nm",
  description: "React & Laravel enjoyer | player for @team_rewals",
  background_img: "https://pbs.twimg.com/profile_images/1448753262535004168/dRJQaiqb.jpg",
  profile_img: "https://pbs.twimg.com/profile_images/1448753262535004168/dRJQaiqb.jpg"
}

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
              {/* TODO Create a route only for users encountered while navigating (for example if pass across one's tweet reply etc) */}
              {users.map((user) => {
                return <Route 
                        path={'/' + user.username}
                        element = {<Profile user = { user } />}
                        key = {user.username}
                        />
              })}
              <Route path='terms' element={<Terms />} />
              <Route path='privacy' element={<Privacy />} />
              <Route path='cookies' element={<Cookies />} />
              <Route path='accessbility' element={<Accessbility />} />
              <Route path='ads' element={<Ads />} />
              <Route path='more' element={<More />} />
              <Route path='me' element={<Me />} />

              <Route path='test' element={<TestFile />} />
            </Route>
              <Route path='*' element={<Void />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

// TODO Post des images
//  NOTE On drag picture, create img element w/ properties and attach it to the tweet
// TODO Retweets
// TODO Limit tweets loading & load more button
// TODO Share
// TODO Replies
// FIXME Le counter de likes etc
