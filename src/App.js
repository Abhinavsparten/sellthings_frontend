
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sell from './components/Sell';
import Home from './components/Home';
import Register from './components/Register';
import CreateProfile from './pages/CreateProfile';
import Login from './pages/Login';
import Viewprofile from './pages/Viewprofile';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      
       
      
      <Routes>
      
        <Route path='home' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='viewprofile' element={<Viewprofile/>}></Route>
        <Route path='createprofile' element={<CreateProfile/>}></Route>
        <Route path='sell' element={<Sell/>}></Route>
  
       
       
      </Routes>
     

      
   
    </div>
  );
}

export default App;
