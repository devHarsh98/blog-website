import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import AuthContext from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<ProtectedRoute element={<CreatePost />} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;