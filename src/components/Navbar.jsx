import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logout = () => {
        signOut(auth).then(() => {
            setIsAuth(false);
            localStorage.clear();
            window.location.pathname = '/';             // navigate
        })
    }
    return (
        <div className='bg-black text-white text-2xl flex justify-center space-x-5 pt-4 pb-4'>
            <Link to='/' className='hover:text-gray-500'>Home</Link>
            {/* <Link to='/createpost' className='hover:text-gray-500'>CreatePost</Link> */}
            {
                !isAuth ? <Link to='/login' className='hover:text-gray-500'>Login</Link> :
                    <>
                        <Link to='/createpost' className='hover:text-gray-500'>CreatePost</Link>
                        <button onClick={logout}>Logout</button>
                    </>
            }
        </div>
    )
}

export default Navbar