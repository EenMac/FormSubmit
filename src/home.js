import React from 'react';
import './App.css';
import SignIn from './signIn';
import SignUp from './signUp';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';


function Home() {
  return <div>

      <h1>
          Welcome to your Home Page
      </h1>
        <BrowserRouter>
          <div className="menu">
            <nav> 
              <li> <Link to="/signup">Sign Up</Link> </li>
              <li> <Link to="/signin">Sign In</Link> </li>
            </nav>
              
          </div>

          <div className="intro-page">
            <Routes>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/passwordval" element={<PasswordVal/>}/>
            </Routes>
        </div>
      </BrowserRouter>
        </div>;
}

export default Home;
