import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDV7zBqXaoDZD6GS_qMjcEbHWGyJii7pAg",
  authDomain: "authentication-7283b.firebaseapp.com",
  projectId: "authentication-7283b",
  storageBucket: "authentication-7283b.firebasestorage.app",
  messagingSenderId: "782283696461",
  appId: "1:782283696461:web:d4cc41fe5703441f082f04",
  measurementId: "G-BN1MDLX2ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit")
if (submit)
  submit.addEventListener("click", function () {
    const name = document.getElementById("User name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    if (!name.value || !email.value || !password.value) {
      Swal.fire({
        title: "Please enter all input fields!",
        icon: "warning",
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'custom-ok-button'
        },
      });

    }
    else {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          Swal.fire({
            title: "Sign Up Successful!",
            text: "Thank you for signing up. Welcome to our platform!",
            icon: "success", // Success icon for successful sign-up
            confirmButtonText: 'Proceed', // Custom button text
            customClass: {
              confirmButton: 'custom-signup-button' // Keep custom styling for the button
            },
            allowOutsideClick: false, // Prevent closing the modal by clicking outside
          });

          sendEmailVerification(user)
            .then(() => {
              // Email verification sent!
              Swal.fire({
                title: "Verify Your Email!",
                text: "A verification link has been sent to your email. Please verify before logging in.",
                icon: "info",
                confirmButtonText: "OK",
                customClass: {
                  confirmButton: 'custom-ok-button'
                }
              });
            });

          name.value = "";
          email.value = "";
          password.value = "";
          // ...
        })
        .catch((error) => {
          Swal.fire({
            title: "Verification Error!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Retry"
          });
        });

    }
  });

const button = document.getElementById("login")
if (button)
  button.addEventListener("click", () => {
    const loginEmail = document.getElementById("loginEmail")
    const loginPassword = document.getElementById("loginPassword")
    if (!loginEmail.value || !loginPassword.value) {
      Swal.fire({
        title: "Please enter all input fields!",
        icon: "warning",
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'custom-ok-button'
        },
      });
      return;
    }
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back! You have successfully logged in.",
          icon: "success", // Success icon for successful login
          confirmButtonText: 'Continue', // Custom button text
          customClass: {
            confirmButton: 'custom-signup-button' // Keep custom styling for the button
          },
          allowOutsideClick: false, // Prevent closing the modal by clicking outside
        });
        loginEmail.value = "";
        loginPassword.value = "";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          title: "Error Code",
          text: errorCode,
          icon: "info",
          confirmButtonText: "Next",
          customClass: {
            confirmButton: "custom-signup-button",
          },
        })
        const errorMessage = error.message;
        Swal.fire({
          title: "Error Message",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Close",
          customClass: {
            confirmButton: "custom-signup-button",
          },
        });
      })
  });

const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
if (forgotPasswordBtn)
  forgotPasswordBtn.addEventListener("click", function () {
    const loginEmail = document.getElementById("loginEmail");

    if (!loginEmail.value) {
      Swal.fire({
        title: "Enter Your Email!",
        icon: "warning",
        customClass: {
          confirmButton: "custom-ok-button",
        },
      });
      return;

    }

    sendPasswordResetEmail(auth, loginEmail.value)
      .then(() => {
        Swal.fire({
          title: "Password Reset Email Sent!",
          text: "Check your email to reset your password.",
          icon: "success",
          customClass: {
            confirmButton: "custom-ok-button",
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  });


