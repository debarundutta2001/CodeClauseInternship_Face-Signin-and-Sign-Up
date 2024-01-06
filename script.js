// Simulated face recognition functions
function signUp() {
    const signupImage = document.getElementById('signup-image').files[0];
    if (signupImage) {
      alert('Sign Up successful!');
    } else {
      alert('Please upload an image.');
    }
  }
  
  function signIn() {
    const signinImage = document.getElementById('signin-image').files[0];
    if (signinImage) {
      alert('Sign In successful!');
    } else {
      alert('Please upload an image.');
    }
  }
  
