document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('#signup-form'); // Ensure it targets the correct form

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission until validation

        const nameField = document.querySelector('#name');
        const emailField = document.querySelector('#email');
        const passwordField = document.querySelector('#password');
        const confirmPasswordField = document.querySelector('#confirm-password');
        
        let isValid = true;

        // Validate name
        if (nameField.value.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
        }

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

        // Validate password confirmation
        if (confirmPasswordField.value.trim() === '') {
            alert('Please confirm your password.');
            isValid = false;
        } else if (passwordField.value !== confirmPasswordField.value) {
            alert('Passwords do not match.');
            isValid = false;
        }

        // If validation is successful, redirect to homepage
        if (isValid) {
            window.location.href = 'index.html'; // Redirect to the home page
        }
    });
});
