import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function IntroPage() {
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  const handleLoginClick = () => {
    // Redirect to the login page
    navigate('/login');
  };

  const handleSignUpClick = () => {
    // Redirect to the sign-up page
    navigate('/signup');
  };

  return (
    <div>
      <div className="intro-page">
        <div className="content">
          <h1 className="init">InIT</h1>
          <p className='intro_content'>
            InIT is an innovative educational platform designed to help learners achieve their goals. With a diverse range of courses and resources, we aim to empower individuals to succeed in their educational journey.
          </p>
        </div>
        <div className="buttons">
          <h1>Get Started!</h1>
          <div className="Login">
            <button onClick={handleLoginClick} className='loginb'>Login</button>
            <button onClick={handleSignUpClick} className='signupb'>Sign Up</button>
          </div>         
        </div>
      </div>
    </div>

  );
}

export default IntroPage;
