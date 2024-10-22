document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-form'); // Ensure the ID matches

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form's default behavior (reload)

        const emailField = document.querySelector('#email');
        const passwordField = document.querySelector('#password');
        
        let isValid = true;

        // Validate email
        if (emailField.value.trim() === '') {
            alert('Please enter your email.');
            isValid = false;
        }

        // Validate password
        if (passwordField.value.trim() === '') {
            alert('Please enter your password.');
            isValid = false;
        }

        // If validation is successful, redirect to homepage
        if (isValid) {
            window.location.href = 'index.html'; // Redirect to the homepage
        }
    });
});
