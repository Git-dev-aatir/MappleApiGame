// Login.js starter content
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isLogin
        ? await authService.login(formData)
        : await authService.register(formData);

      if (response.token) {
        localStorage.setItem('token', response.token);
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Authentication failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-lg p-8 rounded">
      <h2 className="text-2xl font-bold text-center mb-4">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
          className="border px-3 py-2 rounded"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        {isLogin ? "Don't have an account?" : 'Already registered?'}{' '}
        <button onClick={toggleMode} className="text-blue-600 underline">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default Login;