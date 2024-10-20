import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';

function ChangePassword() {
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
            <div className="change-password-container">
            <h2 className='centered-header'>Change Your Password</h2>
            <form className="change-password-form" id="changePasswordForm">
                <div className="password-container">
                <input type="password" id="currentPassword" name="currentPassword" placeholder="Current Password" required />
                <i className="fas fa-eye password-toggle" id="currentPasswordToggle"></i>
                </div>
                <div className="password-container">
                <input type="password" id="newPassword" name="newPassword" placeholder="New Password" required />
                <i className="fas fa-eye password-toggle" id="newPasswordToggle"></i>
                </div>
                <div className="password-container">
                <input type="password" id="confirmNewPassword" name="confirmNewPassword" placeholder="Confirm New Password" required />
                <i className="fas fa-eye password-toggle" id="confirmNewPasswordToggle"></i>
                </div>
                <div className="error-message" id="errorMessage"></div>
                <button type="submit">Change Password</button>
            </form>
            <div className="change-password-links">
                <a href="/login">Back to Login</a>
            </div>
            </div>
        </main>
      <Footer />
    </>
  );
}

export default ChangePassword;
