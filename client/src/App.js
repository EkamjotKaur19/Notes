import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, {useState, useEffect} from 'react';
import Signup from './Components/Signup';
import Home from './Components/Home/Home';
import Navbar from './Components/Nav/Nav';
import Login from './Components/Login/Login';
import Create from './Components/Create/Create';
import { AuthProvider } from './Components/AuthContext';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';



function App() {
  
  const[dark, setDark]=useState(false);
  const [logged, setLogged]=useState(false);

  
  
  
  useEffect(() => {
    if(dark){
      document.body.classList.add('dark');
      

    }
    else{
      document.body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <>
      <Router>
        <AuthProvider >
        <div className={!dark?"App": "App-dark"}>
          <Navbar />
          
        {/*<button type="button" className={dark? "btn btn-light pos mode":"btn btn-dark pos mode"} data-bs-toggle="button" onClick={() => setDark(!dark)} >{dark?'Light Mode' : 'Dark Mode'}</button>
        */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/create' exact element={<Create />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/signup' exact element={ <Signup logged={logged} setLogged={setLogged} />  } />
        </Routes>
        
        
      
        
        
      </div>
      </AuthProvider>
      </Router>
    </>
    
  );
}

export default App;
