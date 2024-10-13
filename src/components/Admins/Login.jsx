import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      // Make POST request to backend login endpoint
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Save JWT token in localStorage
        localStorage.setItem('adminToken', response.data.token);

        // Use a setTimeout to avoid blocking from window.alert
        window.alert('Login successful');
        setTimeout(() => {
          navigate('/admin/dashboard'); // Navigate to the admin dashboard
        }, 0);
      }
    } catch (err) {
      setError('Invalid username or password'); // Show error if login fails
    }
  };

  return (
    <div className="login-container mt-20">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
