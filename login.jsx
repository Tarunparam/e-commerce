import React, { useState } from 'react';
import './loginSignup.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    alert('Login Successful');
  };

  return (
    <div className="loginsignup-container">
      <h1>Login</h1>
      <form className="loginsignup-fields" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
};

export default Login;
