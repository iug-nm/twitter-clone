import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import Thread from './components/Thread';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='site-content'>
        <Thread />
        {/* <Profile /> */}
      </div>
      <Sidebar />
    </div>
  );
}

export default App;