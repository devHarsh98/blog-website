import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');

    const postsCollectionRef = collection(db, 'posts');
    const navigate = useNavigate();

    const createPost = async () => {
        try {
            await addDoc(postsCollectionRef, {
                title: title,
                postText: postText,
                author: {
                    name: auth.currentUser.displayName,
                    id: auth.currentUser.uid,
                },
            })
            toast.success('Post Created', {
                icon : '🔥',
            })
            navigate('/');
        }
        catch (err) {
            console.log('Error : ', err.message);
            toast.error('Error creating post');
        }
    };

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='bg-black text-white w-[400px] h-[400px]'>
                <h1 className='text-2xl font-bold text-center mt-2'>Create a Post</h1>
                <div className='ml-4 mr-4 mt-5 mb-5'>
                    <label htmlFor='title' className='font-bold'>Title</label>
                    <input type="text" placeholder='Title...' id="title" className='focus:outline-none text-black p-2 rounded-sm text-xl w-full mt-2' onChange={(e) => setTitle(e.target.value)
                    } />
                </div>
                <div className='ml-4 mr-4 mt-5 mb-5'>
                    <label htmlFor="post" className='font-bold'>Post</label>
                    <textarea id="post" defaultValue='write...' className='focus:outline-none text-black 
                    p-2 rounded-sm text-xl w-full mt-2 h-[150px]' onChange={(e) => setPostText(e.target.value)}></textarea>
                </div>
                <div className='ml-4 mr-4 mt-5 mb-5'>
                    <button onClick={() => createPost() } className='text-xl bg-white text-black font-bold 
                    rounded-sm w-full'>Submit Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost