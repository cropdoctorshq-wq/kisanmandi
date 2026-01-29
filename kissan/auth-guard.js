import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // User is not signed in, redirect to index.html
        // But only if we are not already on index, login or signup pages
        const path = window.location.pathname;
        if (!path.endsWith('index.html') && !path.endsWith('login.html') && !path.includes('signup') && path !== '/' && path !== '/kissan/') {
            window.location.href = 'index.html';
        }
    } else {
        // User is signed in.
        // If we are on login or signup pages, maybe redirect to home?
        // For now, keeping it simple.
    }
});
