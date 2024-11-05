
//login 

        const email = document.getElementById("email");
        const password = document.getElementById("password");

        const emailerror = document.getElementById("email-error");
        const passworderror = document.getElementById("password-error");
        
        const form = document.getElementById("form");

        const btn= document.getElementById("login");

        const minlength = 8;
        form.addEventListener("submit", (event) => {
            // Clear previous error messages
            emailerror.textContent = '';
            passworderror.textContent = '';

            let valid = true;

            // Validate email
            if (email.value.length === 0) {
                emailerror.textContent = "Email required";
                valid = false; 
            } 
            else if (!validateEmail(email.value)) {
                emailerror.textContent = "Please enter a valid email";
                valid = false; 
            } 

            // Validate password
            if (password.value.length === 0) {
                passworderror.textContent = "Password required";
                valid = false; 
            } else if (password.value.length <= minlength) {
                passworderror.textContent = `Password must be at least ${minlength} characters long.`;
                valid = false; 
            }

            // Prevent form submission if invalid
            if (!valid) {
                event.preventDefault();
            }
        });

        email.addEventListener("input", () => {
            emailerror.textContent = ''; // Clear email error message
        });

        password.addEventListener("input", () => {
            passworderror.textContent = ''; // Clear password error message
        });
        function validateEmail(email) {
            // Regular expression for validating an Email
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        // Toggle password visibility
        const togglePassword = document.querySelector('#togglePassword');
        togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // Change the icon based on the password field type
        this.innerHTML = type === 'password' 
        ? '<i class="fas fa-eye"></i>' 
        : '<i class="fas fa-eye-slash"></i>';
});


const firebaseConfig = {
  apiKey: "AIzaSyCdlgHLDEcQb2IJhReeObkq6VhfPfnC-Uk",
  authDomain: "movie-wave-c171b.firebaseapp.com",
  projectId: "movie-wave-c171b",
  storageBucket: "movie-wave-c171b.firebasestorage.app",
  messagingSenderId: "1073642279250",
  appId: "1:1073642279250:web:aeaaaa670899a84434aa8b",
  measurementId: "G-D4PR4H1M6N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// auth.js
const auth = firebase.auth();

// Log In
document.getElementById('btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            console.log('Login successful:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during login:', errorCode, errorMessage);
        });
});
