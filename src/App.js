import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { AuthProvider } from './components/authcontex';
import './App.css';
import Navbar from './components/navbar';
import Main from './page/main';
import { Authwrapper } from './components/authwrapper';
import Profile from './page/profile';
import About from './page/about';
import Kantin from './page/kantin';
import Login from './page/login';
import Signin from './page/signin';
import Detail from './page/detail';



const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/user/authenticate', { withCredentials: true });
  //       console.log(response);
  //       setLoggedIn(true);
  //     } catch (error) {
  //       console.log('Error fetching data', error);
  //       setLoggedIn(false);
  //     }};
  //   // Initial check for authentication status
  //   checkAuthentication();
  // }, []); // Add empty dependency array
  // function PrivateRoute({ children, loggedIn }) {
  //   return loggedIn ? children : <Navigate to="/ 
  //   " />;
  // }

  // function PublicRoute({ children, loggedIn }) {
  //   return !loggedIn ? children : <Navigate to="/profile"  />;
  // }
  return (
    
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='kantin' element={<Kantin />} />
        <Route path='about' element={<About />} />
        <Route path='profile' element={<PrivateRoute loggedIn={loggedIn}><Profile /></PrivateRoute>} />
        <Route path='login' element={<PublicRoute loggedIn={loggedIn}><Login /></PublicRoute>} />
        <Route path='signin' element={<PublicRoute loggedIn={loggedIn}><Signin /></PublicRoute>} />
        <Route path='detail/:id' element={<Detail />} />
      </Routes> */}
      <Authwrapper/>
    </BrowserRouter>
    
  );
};

export default App;
