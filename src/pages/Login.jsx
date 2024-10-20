import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';


function Login() {
    return (
        <>
         <Header />
         <main>
            <div className="login-container">
            <h2 className="centered-header">Login</h2>
            <form className="login-form" id="loginForm">
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <div className="login-links">
                <a href="/forgot-password">Forgot Password?</a>
                <a href="/signup">Sign Up</a>
            </div>
            </div>
        </main>
         <Footer />
        </>
    );
}

export default Login;