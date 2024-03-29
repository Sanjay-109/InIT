import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import NavigBar from '../components/NavigBar';
import API_BASE_URL from '../config';

const SignupPage = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async () => {
    try {
      await axios.post(`${API_BASE_URL}/signup`, {
        rollNumber,
        email,
        password,
      });
      // Redirect to home page after successful signup
      navigate('/home');
    } catch (error) {
      console.error(error.response.data.message);
      // Display error message to the user
    }
  };

  return (
    <div>
      <NavigBar />
      <div className="page-content">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form>
            <div>
              <label>Roll Number:</label>
              <input type="text" value={rollNumber} onChange={handleRollNumberChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="button" onClick={handleSignup}>Sign Up</button>
          </form>
          <div className="redirect-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
