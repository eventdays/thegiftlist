import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = (type) => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    // Handle signup logic
    console.log('Sign up attempt:', { fullName, email, password });
    alert('Sign up functionality would be implemented here.');
  };

  return (
    <>
      <Header />
      <main>
        <div className="signup-container">
          <h2 className="centered-header">Sign Up</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                onClick={() => togglePasswordVisibility('password')}
              ></i>
            </div>
            <div className="password-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <i
                className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                onClick={() => togglePasswordVisibility('confirmPassword')}
              ></i>
            </div>
            <div className={`error-message ${errorMessage ? 'visible' : ''}`}>
                {errorMessage}
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="signup-links">
            <a href="/login">Already have an account? Log in</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Signup;
