import { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "./firebase.js ";

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
          name.value = "";
          email.value = "";
          password.value = "";
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
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

