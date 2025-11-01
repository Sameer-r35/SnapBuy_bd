// login.js

// ✅ If already logged in, redirect to homepage
if (localStorage.getItem('loggedIn') === 'true') {
  window.location.href = 'index.html';
}

// Toggle between login & signup boxes
function toggleSignup() {
  document.querySelector('.login-box').classList.add('hidden');
  document.querySelector('.signup-box').classList.remove('hidden');
}

function toggleLogin() {
  document.querySelector('.signup-box').classList.add('hidden');
  document.querySelector('.login-box').classList.remove('hidden');
}

// ✅ Sign Up function
function signupUser() {
  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value.trim();

  if (!username || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Save user data to localStorage
  localStorage.setItem('user', JSON.stringify({ username, password }));
  alert('Signup successful! You can now log in.');
  toggleLogin();
}

// ✅ Login function
function loginUser() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!storedUser) {
    alert('No account found. Please sign up first.');
    toggleSignup();
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    // Save login state
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert(`Welcome, ${username}!`);

    // Redirect to homepage
    window.location.href = 'index.html';
  } else {
    alert('Incorrect username or password');
  }
}

// ✅ Logout function (for index.html)
function logoutUser() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}
