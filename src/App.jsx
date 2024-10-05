import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx'; 
import About from './pages/About.jsx'; 
import Login from './pages/Login.jsx';  
import Signup from './pages/Signup.jsx';
import Contact from './pages/Contact.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import FaqPage from './pages/FaqPage.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';


// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "how-it-works",
    element: <HowItWorks />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "faq",
    element: <FaqPage />
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "terms",
    element: <Terms />,
  },
  {
    path: "privacy",
    element: <Privacy />,
  }
]);

// Export the RouterProvider as default
function App() {
  return <RouterProvider router={router} />;
}

export default App;
