// Header.js starter content
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-semibold tracking-wide">
        🗺️ MapMissions
      </Link>

      <nav className="flex gap-4 items-center">
        {isAuthenticated ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
