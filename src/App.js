import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

function PageLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    // send a request to your server to authenticate the user
    // ...
    // if the server returns a successful response, store the user's authentication token in localStorage
    localStorage.setItem('token', 'your_token');
  }

  useEffect(() => {
    // check if the user's token is stored in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // redirect the user to the Goals page
      window.location.href = '/Goals';
    }
  }, []);

  return (
    <>
      <h1 className="welcome-header">Welcome to your Vision Board</h1>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            className="login-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className="login-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button className="login-button" type="submit">Login</button>
      </form>
    </>
  );
}

export default PageLogin;


/*
//define state variables for username, password, and message
function PageLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  /*handleSubmit function that:
    - prevents the default form submit behavior
    - checks if the entered username and password match a predefined value
    - sets the message state variable to "Login successful!" if the login is successful
    - sets the message state variable to "Invalid username or password" if the login is not successful
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password');
    }
  }

  return (
    //return a form with input fields for username and password and a submit button
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <br />
      <p>{message}</p>
    </form>
  );
}

export default PageLogin;*/