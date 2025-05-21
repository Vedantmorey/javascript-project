document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation for demonstration
  if (username === "student" && password === "password") {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to homepage after login
  } else {
      alert("Invalid username or password.");
  }
});
