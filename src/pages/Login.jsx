import React, { useContext } from 'react';
import { auth, provider } from '../firebase.config';
import { signInWithPopup } from 'firebase/auth';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        try {
            signInWithPopup(auth, provider).then(() => {
                localStorage.setItem('isAuth', true);
                setIsAuth(true);
                navigate('/');
            })
        }
        catch (err) {
            console.log('Error : ', err.message);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-[80vh] space-y-4'>
            <p className='text-3xl font-bold'>Sign In With Google to Continue</p>
            <button onClick={signInWithGoogle} className='bg-black text-white text-2xl pt-2 pb-2 pl-4 pr-4 rounded-md hover:bg-gray-900'>SignIn</button>
        </div>
    )
}

export default Login