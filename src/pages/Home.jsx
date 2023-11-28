import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase.config';
import { AiOutlineDelete } from 'react-icons/ai';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-hot-toast';


const Home = () => {
    const [postsList, setPostsList] = useState([]);

    const postsCollectionRef = collection(db, 'posts');
    const { isAuth } = useContext(AuthContext);

    const getAllPosts = async () => {
        try {
            const response = await getDocs(postsCollectionRef);
            setPostsList(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        catch (err) {
            console.log('Error : ', err.message);
            toast.error('Error');
        }
    };

    useEffect(() => {
        getAllPosts();
    }, [])

    const deletePost = async (documentId) => {
        try {
            const postDoc = doc(db, 'posts', documentId);
            await deleteDoc(postDoc);
            setPostsList((prevPosts) => prevPosts.filter((post) => post.id !== documentId));
            toast.success('Post Deleted', {
                icon: '👏',
            });
        }
        catch (err) {
            console.error('Error deleting post:', err.message);
            toast.error('Error deleting post');
        }
    };

    return (
        <div className='flex flex-col items-center mt-5 mb-5'>
            {postsList.map((post, index) => (
                <div key={index} className='shadow-lg w-[500px] h-[400px] bg-white rounded-md p-4 mb-5'>
                    <h1 className='font-bold text-3xl text-center mt-2 mb-2'>{post.title}</h1>
                    <div className='overflow-y-auto h-[300px]'>
                        <p className='text-gray-700'>{post.postText}</p>
                    </div>
                    <div className='flex justify-between cursor-pointer mb-5'>
                        <h2 className='font-bold text-gray-600 mt-2'>@{post.author.name}</h2>
                        {
                            isAuth && post.author.id === auth.currentUser.uid && (
                                <AiOutlineDelete color='black' className='text-3xl' onClick={() => deletePost(post.id)} />
                            )
                        }
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Home