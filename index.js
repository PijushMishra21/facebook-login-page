document.addEventListener('DOMContentLoaded', function() {
 const form = document.getElementById('loginForm');

 form.addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent form submission

   // Get user inputs
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   // Simulate authentication (replace with actual API call)
   simulateLogin(email, password);
 });

 function simulateLogin(email, password) {
   // Simulate asynchronous request
   setTimeout(() => {
     // Simulate success or failure
     const success = Math.random() < 0.8; // 80% success rate

     if (success) {
       alert('Login successful! Redirecting to dashboard...');
       // Redirect to dashboard or another page on successful login
       // window.location.href = 'dashboard.html';
     } else {
       alert('Login failed. Please check your email and password and try again.');
     }
   }, 1000); // Simulate 1 second delay (replace with actual API call)
 }
});



// window.fbAsyncInit = function() {
//  FB.init({
//    appId: 'YOUR_APP_ID',
//    cookie: true,
//    xfbml: true,
//    version: 'v13.0'
//  });

//  document.getElementById('loginButton').addEventListener('click', function() {
//    // Initiate Facebook login
//    FB.getLoginStatus(function(response) {
//      if (response.status === 'connected') {
//        console.log('Already logged in');
//        // You can now fetch the user's profile information or perform other actions
//      } else {
//        FB.login(function(loginResponse) {
//          if (loginResponse.authResponse) {
//            console.log('Logged in');
//            // You can now fetch the user's profile information or perform other actions
//          } else {
//            console.log('Login failed or user canceled login.');
//          }
//        }, { scope: 'email' });
//      }
//    });
//  });
// };

// (function(d, s, id) {
//  var js, fjs = d.getElementsByTagName(s)[0];
//  if (d.getElementById(id)) return;
//  js = d.createElement(s); js.id = id;
//  js.src = 'https://connect.facebook.net/en_US/sdk.js';
//  fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
