import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

function Chat() {
    
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    const handleLogout = async ()=> {
        await auth.signOut();

        history.push('/');
    }

    const getFile = async(url) => {
        const response = await fetch(url);
        const data = await response.blob();
        
        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'});
    }

    useEffect(() => {
        if(!user){
            history.push('/')
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "9d45dd29-33f2-4919-8340-19bcaf6a2e77",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('name', user.email);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name);
                    axios.post('https://api.chatengine.io/users', 
                        formdata, 
                        { headers: { "private-key": "1bef479e-1aa3-42e8-84ca-bb56d1ea1255" } }
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
        })
    }, [user, history])

    if (!user || loading ) return 'Loading...';

    return (
        <div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    Chat App
                </div>
                <div className='logout-tab' onClick={handleLogout}>
                    Logout
                </div>
            </div>

            <ChatEngine 
                height='calc(100vh - 66px)'
                projectID='9d45dd29-33f2-4919-8340-19bcaf6a2e77'
                userName={user.email}
                userSecret={user.uid}
            />
            
        </div>
    )
}

export default Chat;
