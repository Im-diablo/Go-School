import './base.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const userType = document.getElementById('userType').value;

            // Check if the credentials match the admin login
            if (username === 'admin' && password === '12345678') {
                console.log('Login successful:', { username, userType });
                alert(`Login successful for ${userType}: ${username}`);
                // Here you would typically redirect to a dashboard or perform other actions
            } else {
                console.log('Login failed:', { username, userType });
                alert('Invalid credentials. Please try again.');
            }

            // Reset form
            loginForm.reset();
        });
    }
});