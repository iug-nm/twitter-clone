import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Thread from './components/Thread';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='site-content'>
        <Thread />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;