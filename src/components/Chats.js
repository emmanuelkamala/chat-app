import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

function Chat() {
    
    const history = useHistory();

    const handleLogout = async ()=> {
        await auth.signOut();

        history.push('/');
    }

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
                projectId='3711642e-482c-4ec0-9025-ff2d820e443f'
                userName='.'
                userSecret='.'
            />
            
        </div>
    )
}

export default Chat;
