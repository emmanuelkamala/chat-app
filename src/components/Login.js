import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

export default function Login() {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to Chat App</h2>
                <div className='login-button google'>
                    <GoogleOutlined /> Sign In With Google
                </div> <br />
                <div className='login-button facebook'>
                    <FacebookOutlined /> Sign In With Facebook
                </div>
            </div>
        </div>
    )
}

