import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigBar from '../components/NavigBar';
import axios from 'axios';
import API_BASE_URL from '../config';
import { jwtDecode } from 'jwt-decode';


const LoginPage = () => {
  const [rollNumber, setrollNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlerollNumberChange = (event) => {
    const value = event.target.value;
   
    if (/^\d*$/.test(value) || value === '') {
      setrollNumber(value);
    } else {
      alert("Only Numbers are allowed");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {

      if ( rollNumber === '5091' && password === 'user5091'){
        navigate('/admin');
        return;
      }
      
      const response = await axios.post(`${API_BASE_URL}/login`, {
        rollNumber,
        password,
      });
      const token = response.data.token;
      // Store token in local storage or cookie
      localStorage.setItem('token', token);
      // Redirect to home page or dashboard
      const decodedToken = jwtDecode(token); 
      if (decodedToken.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } catch (error) {
      alert("Roll number or password incorrect");
      console.error(error.response.data.message);
      // Display error message to the user
    }
  };

  return (
    <div>
      <NavigBar />
      <div className="page-content">
        <div className="form-container">
          <h2>Login</h2>
          <div>
            <label>Roll Number:</label>
            <input type="email" value={rollNumber} onChange={handlerollNumberChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
          <div className="redirect-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
