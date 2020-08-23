import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import AppBar from './AppBar'
import Users from './Users'

function App() {

 
  return (
    <div >
      <Router>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
