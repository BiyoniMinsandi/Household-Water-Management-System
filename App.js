
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Dashboard/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Settings from './Pages/Settings/Settings';

function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
          <Navbar/>
     <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Settings" element={<Settings/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

