import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Index from './pages/Index';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Index/>
    </div>
  );
}

export default App;
