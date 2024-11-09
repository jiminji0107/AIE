import './App.css';
import Splash from './SplashScreen';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Splash />}/>
        <Route path = "/Home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
