import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBQi93MqeaC1HlOVfBsm1fPDRvhj0uHNtE",
    authDomain: "chat-app-bd934.firebaseapp.com",
    projectId: "chat-app-bd934",
    storageBucket: "chat-app-bd934.appspot.com",
    messagingSenderId: "822623399934",
    appId: "1:822623399934:web:f9457a175dfeb02b375aaf"
}).auth();