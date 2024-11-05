//signup


        const name = document.getElementById("signup-name");
        const email = document.getElementById("signup-email");
        const password = document.getElementById("signup-password");
        const confirmPassword = document.getElementById("confirm-password");

        const nameerror = document.getElementById("nameerror");
        const emailerror = document.getElementById("emailerror");
        const passworderror = document.getElementById("passworderror");
        const cpasserror = document.getElementById("cpasserror");

        const btn=document.getElementById("signup-btn");

        const signform = document.getElementById("signform");
        const minlength = 8; 

        const firebaseConfig = {
            apiKey: "AIzaSyCdlgHLDEcQb2IJhReeObkq6VhfPfnC-Uk",
            authDomain: "movie-wave-c171b.firebaseapp.com",
            projectId: "movie-wave-c171b",
            storageBucket: "movie-wave-c171b.appspot.com",
            messagingSenderId: "1073642279250",
            appId: "1:1073642279250:web:aeaaaa670899a84434aa8b",
            measurementId: "G-D4PR4H1M6N"
        };
    
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();

        signform.addEventListener("submit", (event) => {
            // Clear previous error messages
            nameerror.textContent = "";
            emailerror.textContent = "";
            passworderror.textContent = "";
            cpasserror.textContent = "";

            let valid = true; 

            // Validate username
            if (name.value.length === 0) {
                nameerror.textContent = "Username required";
                valid = false; 
            }

            // Validate email
            if (email.value.length === 0) {
                emailerror.textContent = "Email required";
                valid = false; 
            } else if (!validateEmail(email.value)) {
                emailerror.textContent = "Please enter a valid email";
                valid = false; 
            } 

            // Validate password
            if (password.value.length === 0) {
                passworderror.textContent = "Password required";
                valid = false; 
            } else if (password.value.length < minlength) {
                passworderror.textContent = `Password must be at least ${minlength} characters long.`;
                valid = false; 
            }

            // Validate confirm password
            if (confirmPassword.value !== password.value) {
                cpasserror.textContent = "Passwords do not match";
                valid = false; 
            }

            if (!valid) {
                event.preventDefault();
            }
        });

        // Clear error messages on input
        name.addEventListener("input", () => {
            nameerror.textContent = '';
        });

        email.addEventListener("input", () => {
            emailerror.textContent = ''; 
        });

        password.addEventListener("input", () => {
            passworderror.textContent = ''; 
        });

        confirmPassword.addEventListener("input", () => {
            cpasserror.textContent = '';
        });

        // Function to validate email format
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        };

        // Toggle password visibility
        const togglePassword = document.querySelector('#togglePassword');
        togglePassword.addEventListener('click', function () {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });

        // Toggle visibility for the confirm password field
        const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
        toggleConfirmPassword.addEventListener('click', function () {
            const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPassword.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });

        // Sign Up
    document.getElementById('signup-btn').addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log('Sign Up successful:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during sign up:', errorCode, errorMessage);
        });
});
