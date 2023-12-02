
// src/App.js
import React from 'react';
import Login from './login';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

//function App() {
//  return (
//    <div className="App">
//      <Login />
//    </div>
//  );
//}
function App() {
  return (
    <Router>
      <Routes>
        {/* Set the default route to Login */}
        <Route path="/" element={<Login />} />

        {/* Use the Dashboard component for the "/Dashboard" route */}
        <Route path="/Dashboard" element={<Dashboard />} />

        {/* You might want to use "/login" instead of "/login" for consistency */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;