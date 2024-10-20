import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';


function ForgotPassword() {
    return (
        <>
         <Header />
         <main>
            <div className="forgot-password-container">
            <h2 className='centered-header'>Forgot Password</h2>
            <form className="forgot-password-form" id="forgotPasswordForm">
                <input type="email" id="email" name="email" placeholder="Enter your email" required="" />
                <button type="submit">Reset Password</button>
            </form>
            <p className="form-info">Enter the email address associated with your account, and we'll send you a link to reset your password.</p>
            <a href="/login" className="back-to-login">Back to Login</a>
            </div>
        </main>
         <Footer />
        </>
    );
}

export default ForgotPassword;