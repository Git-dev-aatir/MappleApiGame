// App.js starter content
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import MissionDetail from './pages/MissionDetail';

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // basic auth check

  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/mission/:id"
            element={isAuthenticated ? <MissionDetail /> : <Navigate to="/login" />}
          />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
