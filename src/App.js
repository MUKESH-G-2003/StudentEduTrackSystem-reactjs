// import logo from './logo.svg';
import './App.css';
import Navigation from './component/navigation';
import Profile from './component/profile';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navigation />
        <Profile />
      </div>
    </div>
  );
}

export default App;
