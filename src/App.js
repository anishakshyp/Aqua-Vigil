import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './layout/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
