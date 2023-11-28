import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const { isAuth } = useContext(AuthContext);
    return (
        !isAuth ? <Navigate to='/login' /> : element
    )
}

export default ProtectedRoute