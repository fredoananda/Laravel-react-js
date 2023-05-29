import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post('/login', { email, password })
      .then((response) => {
        // Logika setelah login berhasil
        console.log('Login berhasil');
      })
      .catch((error) => {
        // Logika setelah login gagal
        console.error('Login gagal', error);
      });
  };

  const handleRegister = () => {
    // Logika untuk menuju halaman registrasi
    console.log('Menuju halaman registrasi');
  };

  const handleCancel = () => {
    // Logika untuk membatalkan login
    console.log('Login dibatalkan');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="button" className="login-button" onClick={handleLogin}>
            Login
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button
            type="button"
            className="register-button"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
